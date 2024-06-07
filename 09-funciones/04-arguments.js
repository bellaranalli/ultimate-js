function suma(a, b) {
    return a + b;
}

console.log(suma(1, 2));

/**
 * si pasar 1 argumento o si no pasara ninguno, se imprime NaN - not a number.
 */

function suma1(a, b) {
    console.log(arguments);
}

console.log(suma1(1, 2, 3, 4));

function suma2(a, b) {
    return Array.from(arguments)
    .reduce ((acc, el) => acc + el)
}

console.log(suma2(1, 2, 3, 4));

function suma3(a, b) {
    let total = 0;
    for (let valor of arguments) { //iterar los argumentos
        total += valor;
    }
    return total;
}

console.log(suma3(1, 2, 3, 4));