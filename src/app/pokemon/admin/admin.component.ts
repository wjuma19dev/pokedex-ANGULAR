import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.find()
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      })
  }

}
