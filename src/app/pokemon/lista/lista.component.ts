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
  public loading: boolean = false;

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.pokemonService.find()
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
        setTimeout(() => this.loading = false, 500);
      })
  }

}
