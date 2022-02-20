import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService 
  ) { }

  ngOnInit(): void {
    
    this.route.paramMap
      .subscribe(paramMap => {
        const nombre: string | null = paramMap.get('nombre');
        if (!nombre) {
          this.router.navigateByUrl('/pokedex');
        } else {
          this.pokemonService.findOne(nombre)
            .then((pokemon: Pokemon | undefined) => {
              this.pokemon = pokemon;
              console.log(this.pokemon);
            });
        }
      });
    
  }

}
