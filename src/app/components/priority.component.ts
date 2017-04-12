import { Component, Input } from '@angular/core';
import { Priority } from '../models/priority';
import { Character } from '../models/character';

@Component({
  selector: 'priority',
  templateUrl: '../templates/priority.component.html',
  styles : [
      '.priority-radio-group {display: inline-flex; flex-direction: column;}',
      '.priority-radio-button {margin: 5px;}'
  ]
})
export class PriorityComponent {
  @Input() priority: Priority;
}