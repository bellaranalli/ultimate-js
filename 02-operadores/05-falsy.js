//short-circuit

//False, cuales devuelven falso? Valores falsy
//false
//0
//''
//null
//undefined
//NaN
let nombre = 'Cahnchito Feliz';
let username = nombre || 'Anonimo';
console.log(username)

function fn1(){
    cconsole.log('soy funcion 1')
    return false;
}

function fn2(){
    cconsole.log('soy funcion 2')
    return true;
}

let x = fn1() && fn2();