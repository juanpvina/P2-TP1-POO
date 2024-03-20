import { Autor } from "./Autor";
import { Libro } from "./Libro";

export class LibroImpreso implements Libro {
    titulo: string;
    autor: Autor;
    obtenerResumen(): string {
        return `${this.titulo} - ${this.autor.nombre} ${this.autor.apellido}`

    }
    constructor(titulo: string, autor: Autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}