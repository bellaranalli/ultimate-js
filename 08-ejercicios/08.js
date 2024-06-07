const usuarios = [
    { edad: 17, nombre: 'Pomelo', plan: 'premium' },
    { edad: 12, nombre: 'Rosado', plan: 'free' },
    { edad: 33, nombre: 'Almendra', plan: 'gold' },
    { edad: 20, nombre: 'Nuez', plan: 'free' },
];

//Obtener los usuarios pagos
//Ordenar de mayor a menor edad
//Devolver el nombre del usuario
//Crear plantulla de HTML
//Imprimirla en consola
/**
 * <ul>
 * <li></li>
 * </ul>
 */
const pagos = usuarios.filter(u => u.plan !== 'free');
pagos.sort((a, b) => { 
    if (a.edad < b.edad) {
        return 1;
    }
    if (a.edad > b.edad) {
        return -1;
    }
    return 0;
});

const lista = pagos.map(u => `<li>${u.nombre}</li>`);
const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`
console.log(html);



