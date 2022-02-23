import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "../page404/page404.component";
import { AdminComponent } from "./admin/admin.component";
import { AgregarComponent } from "./agregar/agregar.component";
import { DetailComponent } from "./detail/detail.component";
import { ListaComponent } from "./lista/lista.component";
import { PokemonComponent } from "./pokemon.component";

const routes: Routes = [
    { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
    { 
        path: 'pokedex', 
        component: PokemonComponent,
        children: [
            { path: '', component: ListaComponent },
            { path: 'agregar', component: AgregarComponent },
            { path: 'administrador', component: AdminComponent },
            { path: ':nombre', component: DetailComponent }
        ] 
    },
    { path: '**', component: Page404Component }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {}