import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "./page404/page404.component";
import { AgregarComponent } from "./pokemon/agregar/agregar.component";
import { DetailComponent } from "./pokemon/detail/detail.component";
import { ListaComponent } from "./pokemon/lista/lista.component";
import { PokemonComponent } from "./pokemon/pokemon.component";

const routes: Routes = [
    { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
    { 
        path: 'pokedex', 
        component: PokemonComponent,
        children: [
            { path: '', component: ListaComponent },
            { path: 'agregar', component: AgregarComponent },
            { path: ':nombre', component: DetailComponent }
        ] 
    },
    { path: '**', component: Page404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}