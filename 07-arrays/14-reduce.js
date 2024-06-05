const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acc, el) => {
    return acc + el;
}, 0);

console.log(suma);

///////
const anidado = [[1, 2], 3, [4, 5]];
const plano = anidado
.reduce((acc, el)=> acc.concat(el), []);

console.log(plano);

///////
const usuarios = [
    { edad: 17, nombre: 'Pomelo' },
    { edad: 12, nombre: 'Rosado' },
    { edad: 33, nombre: 'Almendra' },
    { edad: 20, nombre: 'Nuez' },
];

const indexado = usuarios.reduce ((acc, el)=> ({
...acc,
[el.nombre]: el,
}), {});

console.log(indexado);