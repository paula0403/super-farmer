import { GameModes } from '../Enums/GameModeEnums';
import { AnimalNames } from '../Enums/AnimalNamesEnum';
import { AnimalRoles } from '~src/Enums/AnimalRolesEnum';

export interface GameConfigInterface {
  mode: GameModes;
  roundTimeInSeconds: number;
  totalGameTimeInSeconds?: number;
  playersConfig: { name: string; path: string }[];
  herdConfig: herdConfigInterface[];
  predatorAnimalsConfig: predatorAnimalInterface[];
}

export interface herdConfigInterface {
  name: AnimalNames;
  tradeValue: number;
  role: AnimalRoles;
  playersInitialStock: number;
  bankInitialStock: number;
  dice?: { diceNumber: number; probability: number }[];
}

export interface predatorAnimalInterface {
  name: AnimalNames;
  kills: AnimalNames[];
  isChasedAwayBy: [AnimalNames];
  dice?: { diceNumber: number; probability: number }[];
}