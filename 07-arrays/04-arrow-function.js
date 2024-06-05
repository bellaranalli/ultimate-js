/*function hola(){
    return 'Hola mundo';
}*/

//son anónimas, y de querer referenciarla en el futuro deberá asignarse a una constante o variable
const hola = (mensaje) => mensaje + ' ' + 'Hola mundo';

const hola2 = (mensaje) => {
    return mensaje + ' ' + 'Hola mundo'
};

const resultado = hola('Hola persona');
console.log(resultado);

const resultado2 = hola2('Hola sujeto');
console.log(resultado2);