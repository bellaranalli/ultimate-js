//devolver un array de pares

let pairs = [
    [1, { name: 'Nicolas' }],
    [2, { name: 'Felipe' }],
    [3, { name: 'Canchito' }],
];

let array = [
    {
        id: 1,
        name: 'Nicolas',
    },
    {
        id: 2,
        name: 'Felipe',
    },
    {
        id: 3,
        name: 'Canchito',
    },

]



function toCollection(arr) {
    let = colletcion = [];
    for (idx in arr) {
        let elemento = arr[idx];
        colletcion[idx] = elemento[1];
        colletcion[idx].id = elemento[0];
    }
    return colletcion;

}

let resultado = toCollection(pairs);
console.log(resultado);