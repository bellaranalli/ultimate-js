//Personaje de TV
let nombre = 'Tanjiro';
let anime = 'Damon Slayer';
let edad = 16;

let personaje = {
    nombre: 'Tanjiro',
    anime: 'Damon Salyer',
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13; // para modificar el valor de la propiedad

let llave = 'edad';// para modificar el valor de la propiedad si no conozco su nombre
personaje[llave] = 16; 

delete personaje.anime; // para eliminar la propiedad del objeto que deseamos

console.log(personaje);
