import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import {PokedexComponent} from './pokedex/pokedex.component';
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [
      AppComponent,
      PokedexComponent
  ],
  imports: [
    BrowserModule
      , FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
