import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  public pokemon: Pokemon | undefined;
  private pokemonSubscription: Subscription | undefined;
  public loading: boolean = false;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService 
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap
      .subscribe(paramMap => {
        const nombre: string | null = paramMap.get('nombre');
        if (!nombre) {
          this.router.navigateByUrl('/pokedex');
        } else {
          this.pokemonService.findOne(nombre)
            .subscribe(pokemon => {
              this.pokemon = pokemon;
              setTimeout(() => this.loading = false, 500);
            })
        }
      });
  }

  ngOnDestroy(): void {
      this.pokemonSubscription?.unsubscribe();
  }

}
