/**
 * new Object(); {}
 * ney Array(); []
 * new String(); "",'',``
 * new Number(); 12
 * new Boolean(); true, flase
 * 
 * el typeoff devuelve objetc
 */

//let obj = {};
let obj = new Object(); // son el mismo objeto creados diferente

function Usuario(){
    this.name = 'Bella';
}
let user = new Usuario();
console.log(user.constructor)

const s1 = '1+1';
const s2 = new String ('1+1');
//console.log(s1, s2) devuelve 1+1 y String {1+1} 
//console.log(eval.s1, eval.s2) devuelve 2 y String {'1+1'} en este caso se evalua el contenido
console.log(s2.valueOf()) //devuelve el valor del contenido del constructor, es decir, 1+1
