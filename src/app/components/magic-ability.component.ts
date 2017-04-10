import { Component, Input } from '@angular/core';
import { MagicAbility } from '../models/magic-ability';
import { Character } from '../models/character';

@Component({
  selector: 'magic-ability',
  templateUrl: '../templates/magic-ability.component.html'
})
export class MagicAbilityComponent {
  @Input() character: Character;
  magic_abilities = [
      {value: MagicAbility.Mundane, text: "Mundane"},
      {value: MagicAbility.Magician, text: "Magician"},
      {value: MagicAbility.AspectedMagician, text: "Aspected Magician"},
      {value: MagicAbility.Adept, text: "Adept"},
      {value: MagicAbility.MysticAdept, text: "Mystic Adept"},
      {value: MagicAbility.Technomancer, text: "Technomancer"},
  ]
}
