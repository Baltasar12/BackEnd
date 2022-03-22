// Clase
class UsuarioC {
    constructor(nombre,apellido,librosC,mascotasC){
        this.nombre = nombre;
        this.apellido = apellido;
        this.librosC = librosC;
        this.mascotasC = mascotasC;
    }
    getFullNameC = () => `${this.nombre} ${this.apellido}`;
    addMascotasC = (nombre) => this.mascotasC.push(nombre);
    getMascotasC = () => this.mascotasC.length;
    addBooksC = (nombre,autor) => this.librosC.push(
        {
            nombre,
            autor
        }
    )
    getBooksC = () => this.librosC.map (e => e.nombre)
}

let librosC = [
    {
        nombre:'libroC1',
        autor:'autorC1',
    },
    {
        nombre:'libroC2',
        autor:'autorC2',
    },
];

let mascotasC =['firulaiC','michifuC'];

let usuario1C = new UsuarioC('Baltasar','Barbaglia',librosC,mascotasC)
console.log( usuario1C.getFullNameC() )
console.log( usuario1C.getMascotasC() )
console.log( usuario1C.getBooksC());
