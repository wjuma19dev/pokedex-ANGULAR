import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, take } from "rxjs";
import { Pokemon } from "./pokemon.interface";

@Injectable()
export class PokemonService {

    constructor(private http: HttpClient) {}

    find(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>('../../assets/data/db.json');
    }
    
    create(pokemon: Pokemon): void {
        console.log(pokemon);
    }

    findOne(nombre: string): Observable<Pokemon | undefined> {
        return this.http.get<Pokemon[]>('../../assets/data/db.json')
            .pipe(
                take(1),
                map(pokemons => {
                    return pokemons.find((pokemon: Pokemon) => pokemon.nombre === nombre);
                })
            );
    }
}