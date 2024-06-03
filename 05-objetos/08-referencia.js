/*let a = 1;
let b = a;

b++ 
console.log(a ,b); // Devuelve 1 2 
*/

/*let a = {};
b = a;

b.prop = 1;
console.log(a, b); // Devuelve {prop: 1} {prop: 1}
*/

/*let a = 1;

function suma(n){
    n++;
}

suma(a);
console.log(a); // Devuelve 1
*/

let a = { prop: 1 };

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a); // Devuelve 2

// los tipos de datos primitivos se copian cuando los asignamos a otras variables
//los tipos de datos de referencia se referencian (objetos, array y fn)