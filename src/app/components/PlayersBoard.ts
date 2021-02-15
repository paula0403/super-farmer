import { Player } from '../../Player';
import { Render } from '../utils/Render';
import { ConvertAnimalName } from '../utils/ConvertAnimalName';

export class PlayersBoard {
  /*returns player's board with player's name, avatar and herd */
  renderPlayersBoard(player: Player): HTMLElement {
    const playersBoardContainer: HTMLElement = Render.elementFactory(
      'div',
      {
        className: 'board-container',
        style: `border:4 px solid${player.theColor}`,
      },
    );
    const playersDataPanel: HTMLElement = Render.elementFactory(
      'div',
      { className: 'players__data' },
    );
    const playerName: HTMLElement = Render.elementFactory(
      'h3',
      {
        className: 'players__data__name',
      },
      player.theName,
    );
    const playerAvatar: HTMLElement = Render.elementFactory(
      'div',
      {
        className: 'players__data__avatar',
      },
      Render.elementFactory('img', {
        className: 'players__data__avatar--img',
        src: player.theAvatar,
      }),
    );
    const playerTimer: HTMLElement = Render.elementFactory('div', {
      id: 'time-left',
      className: 'players__data__time',
    });
    const herdView = Render.elementFactory('div', {
      className: 'players__herd',
    });
    const playerHerd = player.theHerd.theAnimals.map(
      ([animal, count]) =>
        Render.elementFactory(
          'div',
          { className: 'players__herd__item' },
          ConvertAnimalName.toHTMLElement(
            animal.theName,
            'players__herd__item__img',
          ),
          Render.elementFactory(
            'p',
            { className: 'players__herd__item__text' },
            `${count}`,
          ),
        ),
    );
    Render.childrenInjector(
      playersDataPanel,
      playerName,
      playerAvatar,
      playerTimer,
    );
    Render.childrenInjector(herdView, ...playerHerd);
    Render.childrenInjector(
      playersBoardContainer,
      herdView,
      playersDataPanel,
    );

    return playersBoardContainer;
  }
  /*updates timer on players board*/
  updateTime(timeLeft: number): void {
    const timer = document.querySelector('#time-left') as HTMLElement;
    timer.innerHTML =
      timeLeft < 10
        ? `<h3>0:0${timeLeft}</h3><p>time left</p>`
        : `<h3>0:${timeLeft}</h3><p>time left</p>`;
    if (timeLeft <= 0) {
      timer.style.display = 'none';
    }
  }
}
