import { Pokemon, Tipo } from "./pokemon.interface";

export class PokemonService {

    pokemons: Pokemon[] = [
        {
            id: '001',
            imagenUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            fullUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
            nombre: 'bulbasaur',
            tipos: [ Tipo.PLANTA, Tipo.VENENO, ],
            descripcion: 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
            debilidades: [ Tipo.FUEGO, Tipo.PSIQUICO, Tipo.VOLADOR, Tipo.HIELO ],
            detalles: {
                altura: "0,7 m",
                peso: "6,9 kg",
                sexo: ["f", "m"],
                categoria: ["Semilla"],
                habilidad: "Esperusa"
            }
        },
        {
            id: '006',
            imagenUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
            fullUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
            nombre: 'charizard',
            tipos: [ Tipo.FUEGO, Tipo.VOLADOR ],
            descripcion: 'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
            debilidades: [ Tipo.AGUA, Tipo.ELECTRICO, Tipo.ROCA ],
            detalles: {
                altura: "1,7 m",
                peso: "90,5 kg",
                sexo: ["f", "m"],
                categoria: ["Llama"],
                habilidad: "Mar Llamas"
            }
        }
    ];

    async find(): Promise<Pokemon[]> {
        return [ ...this.pokemons ]
    }
    
    create(pokemon: Pokemon): void {
        this.pokemons.push(pokemon)
    }

    findOne(nombre: string): Promise<Pokemon | undefined> {
        return new Promise(resolve => {
            const pokemon = this.pokemons.find((pokemon: Pokemon) => pokemon.nombre === nombre);
            resolve(pokemon)
        });
    }
}