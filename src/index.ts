import { Autor } from "./entities/Autor";
import { Biblioteca } from "./entities/Biblioteca";
import { LibroImpreso } from "./entities/LibroImpreso";

const juan = new Autor("juan", "pablo");
const pedro = new Autor("persona", "apellido");

const libro1 = new LibroImpreso("señor de la noche", juan);
const libro2 = new LibroImpreso("type script", pedro);


const biblioteca = new Biblioteca();

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

biblioteca.mostrarCatalogo();
