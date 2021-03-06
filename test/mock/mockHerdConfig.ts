import { HerdConfigInterface } from '../../src/Interfaces/HerdConfigInterface';
import { AnimalNames } from '../../src/Enums/AnimalNamesEnum';
import { AnimalRoles } from '../../src/Enums/AnimalRolesEnum';

export const mockHerdConfig: HerdConfigInterface[] = [
  {
    name: AnimalNames.RABBIT,
    tradeValue: 1,
    path: '/static/images/avatars/rabbit.png',
    role: AnimalRoles.LIVESTOCK,
    inStock: 0,
  },
  {
    name: AnimalNames.SHEEP,
    tradeValue: 6,
    path: '/static/images/avatars/sheep.png',
    role: AnimalRoles.LIVESTOCK,
    inStock: 0,
  },
  {
    name: AnimalNames.PIG,
    tradeValue: 12,
    path: '/static/images/avatars/pig.png',
    role: AnimalRoles.LIVESTOCK,
    inStock: 0,
  },
  {
    name: AnimalNames.COW,
    tradeValue: 36,
    path: '/static/images/avatars/cow.png',
    role: AnimalRoles.LIVESTOCK,
    inStock: 0,
  },
  {
    name: AnimalNames.HORSE,
    tradeValue: 72,
    path: '/static/images/avatars/horse.png',
    role: AnimalRoles.LIVESTOCK,
    inStock: 0,
  },
  {
    name: AnimalNames.SMALL_DOG,
    tradeValue: 6,
    path: '/static/images/avatars/dog.png',
    role: AnimalRoles.GUARDIAN,
    inStock: 0,
    chasesAway: AnimalNames.FOX,
  },
  {
    name: AnimalNames.BIG_DOG,
    tradeValue: 36,
    path: '/static/images/avatars/dog.png',
    role: AnimalRoles.GUARDIAN,
    inStock: 0,
    chasesAway: AnimalNames.WOLF,
  },
];
