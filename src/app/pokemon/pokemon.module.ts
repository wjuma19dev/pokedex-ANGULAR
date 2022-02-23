import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ComponentesModule } from "../componentes/componentes.module";
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { AdminComponent } from "./admin/admin.component";
import { AgregarComponent } from "./agregar/agregar.component";
import { DetailComponent } from "./detail/detail.component";
import { ItemComponent } from "./item/item.component";
import { ListaComponent } from "./lista/lista.component";
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonComponent } from "./pokemon.component";

const components: any[] = [
    AgregarComponent,
    DetailComponent,
    ItemComponent,
    ListaComponent,
    PokemonComponent,
    NavegacionComponent,
    AdminComponent
]

@NgModule({
    declarations: components,
    imports: [
        RouterModule,
        CommonModule,
        ComponentesModule,
        ReactiveFormsModule,
        PokemonRoutingModule
    ],
    exports: components
})
export class PokemonModule {}