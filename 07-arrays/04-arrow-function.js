/*function hola(){
    return 'Hola mundo';
}*/

//son anónimas, y de querer referenciarla en el futuro deberá asignarse a una constante o variable
const hola = () => 'Hola mundo';

const resultado = hola();
console.log(resultado);