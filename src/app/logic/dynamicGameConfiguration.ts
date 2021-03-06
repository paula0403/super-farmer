import { AnimalNames } from '../../Enums/AnimalNamesEnum';
import { AnimalRoles } from '../../Enums/AnimalRolesEnum';
import { GameModes } from '../../Enums/GameModeEnums';
import { GameConfigInterface } from '../../Interfaces/GameConfigInterface';

export const dynamicGameConfiguration: GameConfigInterface = {
  mode: GameModes.DYNAMIC,
  roundTimeInSeconds: 15,
  playersConfig: [
    {
      name: 'Carlos Santanos',
      path: '../../static/images/avatars/small_dog.svg',
      color: 'blue',
      isAI: false,
    },
  ],

  livestockConfig: [
    {
      name: AnimalNames.RABBIT,
      tradeValue: 1,
      path: './static/images/avatars/rabbit.svg',
      role: AnimalRoles.LIVESTOCK,
      playersInitialStock: 1,
      bankInitialStock: 60,
      dice: [
        { diceNumber: 1, probability: 6 },
        { diceNumber: 2, probability: 6 },
      ],
    },
    {
      name: AnimalNames.SHEEP,
      tradeValue: 6,
      path: './static/images/avatars/sheep.svg',
      role: AnimalRoles.LIVESTOCK,
      playersInitialStock: 0,
      bankInitialStock: 24,
      dice: [
        { diceNumber: 1, probability: 2 },
        { diceNumber: 2, probability: 3 },
      ],
    },
    {
      name: AnimalNames.PIG,
      tradeValue: 12,
      path: './static/images/avatars/pig.svg',
      role: AnimalRoles.LIVESTOCK,
      playersInitialStock: 0,
      bankInitialStock: 20,
      dice: [
        { diceNumber: 1, probability: 2 },
        { diceNumber: 2, probability: 1 },
      ],
    },
    {
      name: AnimalNames.COW,
      tradeValue: 36,
      path: './static/images/avatars/cow.svg',
      role: AnimalRoles.LIVESTOCK,
      playersInitialStock: 0,
      bankInitialStock: 12,
      dice: [{ diceNumber: 2, probability: 1 }],
    },
    {
      name: AnimalNames.HORSE,
      tradeValue: 72,
      path: './static/images/avatars/horse.svg',
      role: AnimalRoles.LIVESTOCK,
      playersInitialStock: 0,
      bankInitialStock: 4,
      dice: [{ diceNumber: 1, probability: 1 }],
    },
  ],
  protectorsConfig: [
    {
      name: AnimalNames.SMALL_DOG,
      tradeValue: 6,
      path: './static/images/avatars/small_dog.svg',
      role: AnimalRoles.GUARDIAN,
      playersInitialStock: 0,
      bankInitialStock: 4,
      chasesAway: AnimalNames.FOX,
      exclamation: `Woof! Woof! I'm protecting all rabbits in the herd! Woof! Woof!`,
    },
    {
      name: AnimalNames.BIG_DOG,
      tradeValue: 36,
      path: './static/images/avatars/big_dog.svg',
      role: AnimalRoles.GUARDIAN,
      playersInitialStock: 0,
      bankInitialStock: 2,
      chasesAway: AnimalNames.WOLF,
      exclamation: `WOOF! WOOF! I'm protecting the whole herd! WOOF! WOOF!`,
    },
  ],
  predatorsConfig: [
    {
      name: AnimalNames.FOX,
      path: './static/images/avatars/fox.svg',
      roles: AnimalRoles.PREDATOR,
      kills: [AnimalNames.RABBIT],
      isChasedAwayBy: AnimalNames.SMALL_DOG,
      exclamation:
        'Ring-ding-ding-ding-dingeringeding! Wa-pa-pa-pa-pa-pa-pow!',
      dice: [{ diceNumber: 1, probability: 1 }],
    },
    {
      name: AnimalNames.WOLF,
      path: './static/images/avatars/wolf.svg',
      roles: AnimalRoles.PREDATOR,
      kills: [AnimalNames.SHEEP, AnimalNames.PIG, AnimalNames.COW],
      isChasedAwayBy: AnimalNames.BIG_DOG,
      exclamation: 'Auuuuuu!Grrrrr!',
      dice: [{ diceNumber: 2, probability: 1 }],
    },
  ],
};
