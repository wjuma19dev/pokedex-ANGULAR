import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.pokemonService.find()
      .then(pokemons => {
        this.pokemons = pokemons;
        console.log(pokemons);
      });
  }

}
