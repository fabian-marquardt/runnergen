import { Component, Input } from '@angular/core';
import { Attribute } from '../models/attribute';

@Component({
  selector: 'attribute-group',
  templateUrl: '../templates/attribute-group.component.html'
})
export class AttributeGroupComponent {
  @Input() attributes: Attribute[];
  @Input() title;
}
