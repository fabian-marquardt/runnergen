import { Component, Input } from '@angular/core';
import { Metatype } from '../models/metatype';
import { Character } from '../models/character';

@Component({
  selector: 'metatype',
  templateUrl: '../templates/metatype.component.html',
  styles: ['.invalid {color: #FF0000;}']
})
export class MetatypeComponent {
  @Input() character: Character;
  metatypes = [
      {value: Metatype.Human, text: "Human"},
      {value: Metatype.Elf, text: "Elf"},
      {value: Metatype.Orc, text: "Orc"},
      {value: Metatype.Dwarf, text: "Dwarf"},
      {value: Metatype.Troll, text: "Troll"},
  ]

  isMetatypeAvailable(metatype: Metatype): boolean {
    return this.character.metatype_priority.getAvailableMetatypes().includes(metatype);
  }
}
