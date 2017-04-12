import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AttributeComponent } from './components/attribute.component';
import { AttributeGroupComponent } from './components/attribute-group.component';
import { MetatypeComponent } from './components/metatype.component';
import { MagicAbilityComponent } from './components/magic-ability.component';
import { PriorityComponent } from './components/priority.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    AttributeGroupComponent,
    MetatypeComponent,
    MagicAbilityComponent,
    PriorityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
