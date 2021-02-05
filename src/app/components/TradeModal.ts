import { AnimalNames } from '~src/Enums/AnimalNamesEnum';
import { Player } from '~src/Player';
import { Herd } from '../logic/Herd';
import { Offer, Trade } from '../Trade';
import { Render } from '../utils/Render';
import { EmptyModal } from './EmptyModal';

export class TradeModal extends EmptyModal {
  tradeForm: HTMLElement;
  playerView: HTMLElement;
  bankView: HTMLElement;
  warning: HTMLElement;
  player: Player;

  constructor(private trade: Trade, firstPlayer: Player) {
    super();
    this.player = firstPlayer;
    this.playerView = Render.elementFactory('div', {
      className: 'trade__player-wrapper',
    });
    this.bankView = Render.elementFactory('div', {
      className: 'trade__player-wrapper',
    });
    this.tradeForm = Render.elementFactory(
      'form',
      {
        action: '',
        method: 'post',
        className: 'trade',
      },
      this.playerView,
      Render.elementFactory('input', {
        type: 'submit',
        value: 'Trade',
        className: 'trade__submit',
      }),
      this.bankView,
    );
    this.warning = Render.elementFactory('p', {
      className: 'warning',
    });
    Render.childrenInjector(
      this.modalContainer,
      this.tradeForm,
      this.warning,
    );
  }

  /**
   * Creates TradeModal and returns it as HTMLElement.
   */
  createModal(): HTMLElement {
    Render.childrenInjector(
      this.bankView,
      this.createHerdView(this.trade.thisBank, true),
    );
    Render.childrenInjector(
      this.playerView,
      this.createHerdView(this.player),
    );
    this.tradeForm.addEventListener('submit', this.handleSubmit);
    this.modal.addEventListener('keydown', this.clearWarning);
    this.modal.addEventListener('click', this.clearWarning);
    return this.modal;
  }

  /**
   * Sets next player and his herd in the TradeModal.
   */
  setNextPlayer(player: Player): void {
    this.player = player;
    Render.removeAllChildren(this.playerView);
    this.playerView.appendChild(this.createHerdView(this.player));
    Render.removeAllChildren(this.bankView);
    this.bankView.appendChild(
      this.createHerdView(this.trade.thisBank, true),
    );
  }

  private createHerdView(
    { theHerd: herd, theName: name }: Player,
    isBank = false,
  ): HTMLElement {
    const herdElement = Render.elementFactory(
      'div',
      {
        className: 'trade__player-herd',
      },
      ...this.generateAnimalRows(herd, isBank),
    );
    const container = Render.elementFactory(
      'div',
      {
        className: 'trade__player',
      },
      Render.elementFactory(
        'H2',
        { className: 'trade__player-heading' },
        `${name}`,
      ),
      herdElement,
    );
    return container;
  }

  private generateAnimalRows(
    herd: Herd,
    isBank: boolean,
  ): HTMLElement[] {
    const animalsRows: HTMLElement[] = herd.theAnimals.reduce(
      (animalsElements: HTMLElement[], [animal, count]) => {
        if (count > 0) {
          animalsElements.push(
            Render.elementFactory(
              'div',
              { className: 'trade__row' },
              Render.elementFactory(
                'label',
                {
                  for: `${isBank ? 'bank' : 'player'}_${
                    animal.theName
                  }`,
                },
                `${animal.theName}: ${count}`,
              ),
              Render.elementFactory('input', {
                type: 'number',
                id: `${isBank ? 'bank' : 'player'}_${animal.theName}`,
                name: `${isBank ? 'bank' : 'player'}_${
                  animal.theName
                }`,
                min: '0',
                max: `${count}`,
              }),
            ),
          );
        }
        return animalsElements;
      },
      [],
    );

    return animalsRows;
  }

  private formDataIntoTuples(formData: FormData): [Offer[], Offer[]] {
    const offer: Offer[] = [];
    const target: Offer[] = [];
    for (const [key, value] of formData.entries()) {
      const numberOfAnimals = parseInt(value.toString());
      const [player, animal] = key.split('_');
      if (numberOfAnimals > 0) {
        switch (player) {
          case 'player': {
            offer.push([animal as AnimalNames, numberOfAnimals]);
            break;
          }
          case 'bank': {
            target.push([animal as AnimalNames, numberOfAnimals]);
            break;
          }
        }
      }
    }
    return [offer, target];
  }

  private processTrade([offer, target]: [Offer[], Offer[]]): boolean {
    if (offer.length === 1 && target.length === 1) {
      const [[offeredAnimal]] = offer;
      const [[targetAnimal]] = target;
      if (this.trade.processOffer(offer[0], this.player, target[0])) {
        console.log('poszło');
        return true;
      }
      this.displayWarning(
        `The value ratio of the ${offeredAnimal}s to ${targetAnimal}s is not correct`,
      );
      return false;
    }
    if (offer.length > 1 || target.length > 1) {
      this.displayWarning(
        'To much types of animals, allowed one type for one type',
      );
      return false;
    }
    if (offer.length <= 0 || target.length <= 0) {
      this.displayWarning(
        'There need to be at least one animal on both sides',
      );
      return false;
    }
    return false;
  }

  private displayWarning(message: string): void {
    this.warning.textContent = message;
  }

  private handleSubmit = (event: Event): void => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = this.formDataIntoTuples(formData);
    if (this.processTrade(data)) {
      this.setNextPlayer(this.player);
    }
  };

  private clearWarning = (): void => {
    this.warning.textContent = '';
  };
}