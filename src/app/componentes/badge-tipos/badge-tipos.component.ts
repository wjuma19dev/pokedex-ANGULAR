import { Component, Input } from '@angular/core';
import { Tipo } from 'src/app/pokemon/pokemon.interface';

@Component({
  selector: 'app-badge-tipos',
  templateUrl: './badge-tipos.component.html',
  styleUrls: ['./badge-tipos.component.css']
})
export class BadgeTiposComponent {
  @Input() tipos: Tipo[] = [];
}
