//ordenar por tipo de propiedad
const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    { id: 15 },
    ['lala'],
]

function dividePorTipo(arr) {
    return {
        numero: arr.filter(n => typeof n === "number"),
        string: arr.filter(n => typeof n === "string"),
        object: arr.filter(n => typeof n === "object"),
    }
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);