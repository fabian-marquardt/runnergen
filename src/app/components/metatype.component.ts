import { Component, Input } from '@angular/core';
import { Metatype } from '../models/metatype';
import { Character } from '../models/character';

@Component({
  selector: 'metatype',
  templateUrl: '../templates/metatype.component.html'
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
}
