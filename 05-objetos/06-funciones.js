//las fn en js también son objetos de primera clase, pueden ser asignadas a variables, pasadas como argumentos a otras fn y pueden ser retornadas en otras fn.

function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name); //devuelve el nombre de la función
console.log(Usuario.length);//devuelve la cantidad de argumentos que recibe una función

const U = Usuario
let user = new U('Nicolas');

console.log(user);

///
function of(Fn, arg){
    return new Usuario(arg);
}

let user1 = of(Usuario, 'Pepe');
console.log(user1)
///

function returned(){
    return function(){
        console.log('hola mundo');
    }
}

let saludo = returned();
saludo();