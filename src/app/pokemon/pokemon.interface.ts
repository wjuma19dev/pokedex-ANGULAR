export interface Pokemon {
    id: string;
    nombre: string;
    imagenUrl: string;
    fullUrl: string;
    tipos: Array<Tipo>,
    descripcion: string,
    debilidades: Array<Tipo>,
    detalles: {
        altura: string;
        peso: string;
        sexo: [string, string],
        categoria: [string];
        habilidad: string;
    }
}

export enum Tipo {
    VENENO = "VENENO", 
    FUEGO = "FUEGO", 
    NORMAL = "NORMAL", 
    ELECTRICO = "ELECTRICO", 
    TIERRA = "TIERRA", 
    HADA = "HADA", 
    LUCHA = "LUCHA", 
    PSIQUICO = "PSIQUICO", 
    ROCA = "ROCA", 
    HIELO = "HIELO", 
    FANTASMA = "FANTASMA", 
    VOLADOR = "VOLADOR", 
    PLANTA = "PLANTA", 
    AGUA = "AGUA", 
    BICHO = "BICHO"
}