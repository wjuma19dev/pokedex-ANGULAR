import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeTiposComponent } from './badge-tipos/badge-tipos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    BadgeTiposComponent,
    HabilidadesComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BadgeTiposComponent,
    HabilidadesComponent,
    LoaderComponent
  ]
})
export class ComponentesModule { }
