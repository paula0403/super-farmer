import { AnimalNames } from '../Enums/AnimalNamesEnum';
import { AnimalRoles } from '../Enums/AnimalRolesEnum';
import { ProtectHerdInterface } from '../Interfaces/ProtectHerdInterface';
import { Animal } from './Animal';

export class SmallDog extends Animal implements ProtectHerdInterface {
  constructor() {
    super(AnimalNames.SMALL_DOG, 6, AnimalRoles.GUARDIAN);
  }

  // TODO: implement when herd is ready
  protectHerd(): string {
    return `${this.name}: Woof! Woof! I'm protecting all rabbits in the herd! Woof! Woof!`;
  }
}