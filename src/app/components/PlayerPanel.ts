import { Player } from '../../Player';
import { Render } from '../utils/Render';
// import { flatten } from 'lodash';
import { AnimalNames } from '../../Enums/AnimalNamesEnum';
import { GameView } from '../GameView';
import { ConvertAnimalName } from '../utils/ConvertAnimalName';
// import { Animal } from '../../Animals/Animal';

export class PlayerPanel {
  // private player: Player;
  /**
   * Creates PlayerPanel based on data given
   * @param view accepts instance of View componenet
   */
  constructor(private view: GameView) {}
  // TODO: FIND OUT WHY IS THIS PANEL CREATED TOGETHER WITH THE LANDING PAGE
  // this.player = new Player('', '', '');

  // setPlayer(player: Player): void {
  // this.player = player;
  // }

  /**
   * Creates player panel and returns it as HTMLElement
   */
  createPlayerPanel(player: Player): HTMLElement {
    return Render.elementFactory(
      'div',
      {
        className: 'player-panel',
        // style: `background-color: ${player.theColor};`,
      },
      // this.createPlayerBoard(),
      this.createResultTitle(),
      this.createResultWindow(),
      this.createExchangeButton(player),
      this.createDiceButton(player),
      // this.createButtonPanel(player),
    );
  }

  /*private createPlayerBoard(): HTMLElement {
    return Render.elementFactory(
      'div',
      {
        id: 'player-board',
        className: 'player-panel__board',
      },
      ...this.createPanelBoard(),
    );
  }
    Render.removeAllChildren('#player-board');
    Render.render('#player-board', ...this.createPanelBoard());
  }*/

  /*createPanelBoard(): HTMLElement[] {
    return [
      Render.elementFactory(
        'div',
        { className: 'player-panel__info' },
        Render.elementFactory('img', {
          src: this.player.theAvatar,
          alt: `${this.player.theName}-avatar`,
          className: 'avatar-icon',
        }),
        this.createPlayerDetails(),
      ),
      Render.elementFactory(
        'div',
        { id: 'time-left', className: 'player-panel__time' },
        `Time left: `,
      ),
      this.createPlayerHerd(),
    ];
  }*/

  /*private createPlayerDetails(): HTMLElement {
    return Render.elementFactory(
      'div',
      { className: 'player-panel__details' },
      Render.elementFactory('p', {}, 'Current player:'),
      Render.elementFactory(
        'p',
        { className: 'player-panel__name' },
        `${this.player.theName}`,
      ),
    );
  }*/

  /* private createPlayerHerd(): HTMLElement {
    return Render.elementFactory(
      'div',
      { className: 'player-panel__herd' },
      ...flatten(
        this.convertAnimalsToHTML(this.player.theHerd.theAnimals),
      ),
    );
  }*/

  /*private convertAnimalsToHTML(
    animals: [Animal, number][],
  ): HTMLElement[] {
    return animals.map(([animal, count]) =>
      Render.elementFactory(
        'div',
        { className: 'player-panel__result--container' },
        ConvertAnimalName.toHTMLElement(
          animal.theName,
          'player-panel__image',
        ),
        `x${count}`,
      ),*/
  // );
  // }
  private createResultTitle(): HTMLElement {
    return Render.elementFactory(
      'p',
      { className: 'player-panel__title' },
      'Results',
    );
  }
  private createResultWindow(): HTMLElement {
    return Render.elementFactory('div', {
      className: 'player-panel__result',
    });
  }

  // private createButtonPanel(player: Player): HTMLElement {
  // return Render.elementFactory(
  // 'div',
  // { className: 'player-panel__buttons' },
  // this.createExchangeButton(player),
  // this.createDiceButton(player),
  // );
  // }
  private createExchangeButton(player: Player): HTMLElement {
    const tradeBtn = Render.elementFactory(
      'button',
      {
        id: 'exchange',
        className: 'btn button',
        style: `border:1px solid ${player.theColor}`,
      },
      Render.elementFactory('img', {
        className: 'btn__img',
        src: 'static/images/ui/vector.png',
      }),
      Render.elementFactory(
        'div',
        { className: 'btn__text' },
        Render.elementFactory(
          'p',
          { className: 'btn__text--big' },
          'Exchange',
        ),
        Render.elementFactory(
          'p',
          { className: 'btn__text--small' },
          'animals',
        ),
      ),
    );
    tradeBtn.addEventListener('click', () => this.view.handleTrade());
    return tradeBtn;
  }
  private createDiceButton(player: Player): HTMLElement {
    const rollBtn = Render.elementFactory(
      'button',
      {
        id: 'roll-dice',
        className: 'btn button',
        style: `border:1px solid ${player.theColor}`,
      },
      Render.elementFactory('span', {
        className: 'btn__img fas fa-dice',
      }),
      Render.elementFactory(
        'div',
        { className: 'btn__text' },
        Render.elementFactory(
          'p',
          { className: 'btn__text--big' },
          'Roll',
        ),
        Render.elementFactory(
          'p',
          { className: 'btn__text--small' },
          'the dice',
        ),
      ),
    );
    rollBtn.addEventListener('click', () => {
      this.view.handleRoll();
      (document.querySelector(
        '#roll-dice',
      ) as HTMLElement).setAttribute('disabled', 'true');
    });
    return rollBtn;
  }

  /**
   * Displays results of Dice throw
   * @param diceResults Takes array of dice results
   * @param playerGain Takes array of tuples containing players gain
   */
  displayRollResult(
    diceResults: AnimalNames[],
    // playerGain: [AnimalNames, number][],
    // player: Player,
  ): void {
    const diceResult = Render.elementFactory(
      'div',
      {},
      ...diceResults.map((name) =>
        ConvertAnimalName.toHTMLElement(name, 'player-panel__image'),
      ),
    );
    Render.render(
      '.player-panel__result',
      diceResult,
      // Render.elementFactory(
      // 'div',
      // {},
      // Render.elementFactory(
      // 'h3',
      // { className: 'player-panel__result--gain' },
      // `${player.theName} gains:`,
      // ),
      // ...this.convertAnimalsToHTML(
      // playerGain.map(([animal, count]) => [
      // ConvertAnimalName.toAnimalObject(animal),
      // count,
      // ]),
      // ),
      // ),
    );
    this.view.stopTimer();
    // setTimeout(() => this.hideTimer(), 10);
  }

  /*private hideTimer(): void {
    (document.querySelector(
      '#time-left',
    ) as HTMLElement).style.display = 'none';
  }*/

  /**
   * Updates timer on player panel
   * @param timeLeft accepts number value for time left
   */
  /*updateTime(timeLeft: number): void {
    const timer = document.querySelector('#time-left') as HTMLElement;
    timer.innerText = `Time left: ${timeLeft} sec.`;
  }*/

  turnAlert(player: Player): void {
    Render.render(
      '#sf-app',
      Render.elementFactory(
        'div',
        { className: 'exclamation' },
        `${player.theName}'s turn has passed!`,
      ),
    );
  }

  disableTrade(): void {
    (document.querySelector('#exchange') as HTMLElement).setAttribute(
      'disabled',
      'true',
    );
  }
}
