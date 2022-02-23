import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeTiposComponent } from './badge-tipos/badge-tipos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { LoaderComponent } from './loader/loader.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BadgeTiposComponent,
    HabilidadesComponent,
    LoaderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BadgeTiposComponent,
    HabilidadesComponent,
    LoaderComponent,
    BannerComponent
  ]
})
export class ComponentesModule { }
