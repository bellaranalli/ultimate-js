const usuarios = [
    { edad: 17, nombre: 'Pomelo' },
    { edad: 12, nombre: 'Rosado' },
    { edad: 33, nombre: 'Almendra' },
    { edad: 20, nombre: 'Nuez' },
];

const listaNombre = usuarios.map(u => u.nombre);
console.log(listaNombre)

const lista = usuarios.map(u => `<li>${u.nombre}</li>`);
const html = `<ol>${lista.join('')}</ol>`;
console.log(html);

/////
const mapped = usuarios.map(u => {
    return {
        ...u,
        mayor: u.edad > 17,
    };
});
console.log(mapped)
//se puede escribir de este modo de abajo la const mapped que es la misma pero simplificando código
/*const mapped = usuarios.map(u => ({
        ...u,
        mayor: u.edad > 17,
}));*/

/////
const lista2 = usuarios
    .filter(u => u.edad > 17)
    .map(u => `<li>${u.nombre}</li>`);

const html2 = `<ol>${lista2.join('')}</ol>`;
console.log(html2);
