import { AnimalNames } from '~src/Enums/AnimalNamesEnum';
import { Player } from '~src/Player';
import { TradeModal } from '../components/TradeModal';
import { Bank } from '../logic/Bank';
import { Trade } from '../Trade';
import { Render } from '../utils/Render';

//type TradeModalDemo.playDemo() in init in App.ts
export class TradeModalDemo {
  static playDemo(): void {
    const trade = new Trade(new Bank());
    const player = new Player(
      'Donald',
      './static/images/avatars/dog.png',
    );
    player.theHerd.addAnimalsToHerd(AnimalNames.RABBIT, 20);
    player.theHerd.addAnimalsToHerd(AnimalNames.SHEEP, 5);
    player.theHerd.addAnimalsToHerd(AnimalNames.PIG, 5);
    player.theHerd.addAnimalsToHerd(AnimalNames.COW, 2);
    player.theHerd.addAnimalsToHerd(AnimalNames.HORSE, 1);
    const modal = new TradeModal(trade, player);
    Render.render('#sf-app', modal.createModal());

    const player2 = new Player(
      'Gerwazy',
      './static/images/avatars/dog.png',
    );
    player2.theHerd.addAnimalsToHerd(AnimalNames.RABBIT, 6);
    player2.theHerd.addAnimalsToHerd(AnimalNames.SHEEP, 1);
    player2.theHerd.addAnimalsToHerd(AnimalNames.PIG, 2);
    player2.theHerd.addAnimalsToHerd(AnimalNames.COW, 1);
    player2.theHerd.addAnimalsToHerd(AnimalNames.HORSE, 1);

    setTimeout(() => modal.setNextPlayer(player2), 15000);

    const player3 = new Player(
      'Eustachy',
      './static/images/avatars/dog.png',
    );
    player3.theHerd.addAnimalsToHerd(AnimalNames.RABBIT, 8);
    player3.theHerd.addAnimalsToHerd(AnimalNames.SHEEP, 3);
    player3.theHerd.addAnimalsToHerd(AnimalNames.PIG, 1);
    player3.theHerd.addAnimalsToHerd(AnimalNames.COW, 2);
    player3.theHerd.addAnimalsToHerd(AnimalNames.HORSE, 0);

    setTimeout(() => modal.setNextPlayer(player3), 15000);
  }
}