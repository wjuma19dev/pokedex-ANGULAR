import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon/pokemon.interface';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
