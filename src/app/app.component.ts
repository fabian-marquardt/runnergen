import { Component, OnInit } from '@angular/core';
import { Attribute } from './models/attribute';
import { Character } from './models/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  character: Character = new Character();

  ngOnInit() {
    
  }
}
