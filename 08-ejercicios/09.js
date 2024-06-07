const usuarios = [
    { edad: 17, nombre: 'Pomelo', plan: 'premium' },
    { edad: 12, nombre: 'Rosado', plan: 'free' },
    { edad: 20, nombre: 'Nuez', plan: 'free' },
];

const users = [
    { age: 16, name: 'Tangerine', membership: 'premium' },
    { age: 10, name: 'Avocado', membership: 'free' },
    { age: 21, name: 'Apple', membership: 'free' },
];

//Unificar las estructuras de usuarios y users
//Fusionar los array
//Ordenar por edad
//Crear plantilla HTML:
/**
 * <li>Mombre: name, Edad: age</li>
 */
//Imprimir la lista en consola

//lo resolví así:
function cambiarProp(arr, prop) {
    return arr.map(obj => {
        let nuevaProp = {};
        for (let key in obj) {
            if (prop[key]) {
                nuevaProp[prop[key]] = obj[key];
            } else {
                nuevaProp[key] = obj[key];
            }
        }
        return nuevaProp;
    });
}

const prop = {
    age: 'edad',
    name: 'nombre',
    membership: 'plan'
};
const propModificada = cambiarProp(users, prop);
//console.log(propModificada);

const unificar = usuarios.concat(propModificada);
//console.log (unificar);

unificar.sort((a, b) => { 
    if (a.edad < b.edad) {
        return 1;
    }
    if (a.edad > b.edad) {
        return -1;
    }
    return 0;
});

const lista = unificar.map(u => `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);
const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`
console.log(html);

//resolución del video:
const userEsp = users.map(u => ({
       edad: u.age,
       nombre: u.name,
       plan: u.membership,
    }));

const todos = [...usuarios, ...userEsp];

todos.sort((a, b) => { 
    if (a.edad < b.edad) {
        return 1;
    }
    if (a.edad > b.edad) {
        return -1;
    }
    return 0;
});

const lista1 = todos.map(u => `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);
const html1 = `
<ul>
    ${lista.join(`
    `)}
</ul>
`
console.log(html1);