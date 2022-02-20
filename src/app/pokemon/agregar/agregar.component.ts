import { Component } from '@angular/core';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  tipos: any = ["fuego", "veneno", "normal", "eléctrico", "tierra", "hada", "lucha", "psíquico", "roca", "hielo", "fantasma", "volador", "planta", "agua", "bicho"]; 

}
