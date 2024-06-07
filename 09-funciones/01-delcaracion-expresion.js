//Declaración de funciones: Function Declaration
console.log(suma)//Hoisting (Izar o levantar). Con la fn expression tira error por consola, a dif de la declaración de fn.

//Fn nombrada -> Named function
function suma() {
    console.log('sumando...');
}

//Fn anónima -> Anonymus function
/*function(){
    console.log('fn anónima');
}*/

[].map(function () {
    console.log('fn anónima');
})

//Expresión de funciones -> function expression
let resta = function () { //Anonymus function expression
    console.log('restando...');
}

const dividir = function () { //Anonymus function expression
    console.log('dividir...');
}

const multiplica = function multi() { //named function expression
    console.log('multiplica...');
}

const divide = () => { //las arrof function siempre son anónimas
    console.log('divide...');
}

//console.log(suma, resta, dividir, divide, multiplica)