import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
