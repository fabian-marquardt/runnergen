import { Component, Input } from '@angular/core';
import { Attribute } from '../models/attribute';

@Component({
  selector: 'attribute',
  templateUrl: '../templates/attribute.component.html',
  styles: ['input {width: 50px}']
})
export class AttributeComponent {
  @Input() attribute: Attribute;

  increase() {
    this.attribute.skilled++;
  }

  decrease() {
    this.attribute.skilled--;
  }
}
