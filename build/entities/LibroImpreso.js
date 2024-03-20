"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroImpreso = void 0;
class LibroImpreso {
    obtenerResumen() {
        return `${this.titulo} - ${this.autor.nombre} ${this.autor.apellido}`;
    }
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}
exports.LibroImpreso = LibroImpreso;
