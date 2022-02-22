import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{

  tipos: any = ["fuego", "veneno", "normal", "eléctrico", "tierra", "hada", "lucha", "psíquico", "roca", "hielo", "fantasma", "volador", "planta", "agua", "bicho"]; 

  agregarPokemonForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService
    ) {}

  ngOnInit(): void {
      this.agregarPokemonForm = this.fb.group({
        numero: ['', Validators.required],
        imagenDetailUrl: ['', Validators.required],
        imagenFullUrl: ['', Validators.required],
        nombre: ['', Validators.required],
        tipos: ['',Validators.required],
        debilidad: ['', Validators.required],
        descripcion: ['', Validators.required],
        habilidades: this.fb.group({
          altura: ['', Validators.required],
          peso: ['', Validators.required],
          categoria: ['', Validators.required],
          habilidad: ['', Validators.required],
          sexo: this.fb.group({
            female: [''],
            male: ['']
          })
        })
      }); 
  }

  onSubmit(form: FormGroup): void {

    const pokemon: Pokemon = {
      id: form.value.numero,
      nombre: form.value.nombre,
      imagenUrl: form.value.imagenDetailUrl,
      fullUrl: form.value.imagenFullUrl,
      tipos: form.value.tipos,
      debilidades: form.value.debilidad,
      descripcion: form.value.descripcion,
      detalles: {
        altura: form.value.habilidades.altura,
        peso: form.value.habilidades.peso,
        categoria: form.value.habilidades.categoria,
        habilidad: form.value.habilidades.habilidad,
        genero: {
          female: form.value.habilidades.sexo.female,
          male: form.value.habilidades.sexo.male
        }
      }
    } 
    
    this.pokemonService.create(pokemon);

  }

}
