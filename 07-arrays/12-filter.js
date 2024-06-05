const usuarios = [
    { edad: 17, nombre: 'Pomelo' },
    { edad: 12, nombre: 'Rosado' },
    { edad: 33, nombre: 'Almendra' },
    { edad: 20, nombre: 'Nuez' },
];

const mayores = usuarios.filter(u => u.edad > 17);
const menores = usuarios.filter(u => u.edad <= 17);
console.log(mayores, menores);