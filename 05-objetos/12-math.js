console.log(Math.PI); // devuelve pi
console.log(Math.abs(-15)); // devuelve el valor absoluto de un número

console.log(
    Math.PI,
    Math.abs(-15),
    Math.round(15.5), // redondea números con decimales 16
    Math.floor(15.9), // redondea hacia abajo 15
    Math.ceil(15.3), // redondea hacia arriba 16
    Math.pow(2, 3), // calcula la potencia de un número '2 elevado a 3' 8
    Math.sqrt(9), // devuelve raíz cuadrada 3
);

console.log(Math.random()); // devuelve números aleatoreos entre 0 y 1


//fn para devolver número aleatoreo entre 1 y 10
function getRandom(min, max){
    return Math.random() * (max, min) +1;

}

console.log(getRandom(1, 10))


