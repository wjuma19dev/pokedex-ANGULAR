import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AgregarComponent } from './pokemon/agregar/agregar.component';
import { DetailComponent } from './pokemon/detail/detail.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ItemComponent } from './pokemon/item/item.component';
import { ListaComponent } from './pokemon/lista/lista.component';
import { AppRoutingModule } from './app.routing';
import { Page404Component } from './page404/page404.component';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemon/pokemon.service';
import { ComponentesModule } from './componentes/componentes.module';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    AgregarComponent,
    DetailComponent,
    NavegacionComponent,
    ItemComponent,
    ListaComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ComponentesModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
