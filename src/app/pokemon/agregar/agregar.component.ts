import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../pokemon.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{

  tipos: any = ["fuego", "veneno", "normal", "eléctrico", "tierra", "hada", "lucha", "psíquico", "roca", "hielo", "fantasma", "volador", "planta", "agua", "bicho"]; 

  agregarPokemonForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.agregarPokemonForm = this.fb.group({
        numero: ['', Validators.required],
        imagenes: ['', Validators.required],
        nombre: ['', Validators.required],
        tipos: ['',Validators.required],
        debilidad: ['', Validators.required],
        descripcion: ['', Validators.required],
        habilidades: this.fb.group({
          altura: ['', Validators.required],
          peso: ['', Validators.required],
          categoria: ['', Validators.required],
          habilidad: ['', Validators.required],
          female: ['', Validators.required],
          male: ['', Validators.required]
        })
      })


      let imagenes:any = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png;https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
      imagenes = [imagenes]

      
      
  }

  onSubmit(form: FormGroup): void {

    // https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png;https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png


    // const pokemon: Pokemon = {
    //   id: form.value.numero,
    //   nombre: form.value.nombre,
    // }
    console.log(form.value);

  }

}
