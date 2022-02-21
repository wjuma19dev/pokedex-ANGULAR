import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { Page404Component } from './page404/page404.component';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemon/pokemon.service';
import { ComponentesModule } from './componentes/componentes.module';
import { PokemonModule } from './pokemon/pokemon.module';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    PokemonModule,
    ComponentesModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
