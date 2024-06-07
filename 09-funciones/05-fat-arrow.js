//las fat arrow functions no tienen arguments
// con cuentan con super ni con this
const suma = (a, b) => {
    return Array.from(arguments)
    .reduce ((acc, el) => acc + el)
}

console.log(suma(1, 2, 3, 4)); // devuelve error por el arguments

