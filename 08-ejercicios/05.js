//devolver el usuario de mayor edad
const usuarios = [
    { edad: 17, nombre: 'Pomelo', plan: 'premium' },
    { edad: 12, nombre: 'Rosado', plan: 'premium' },
    { edad: 33, nombre: 'Almendra', plan: 'free' },
    { edad: 20, nombre: 'Nuez', plan: 'gold' },
];

function obtenerMayor(arr) {
    let mayor = arr[0];
    for (let usuario of arr) {
        if (mayor.edad < usuario.edad) {
            mayor = usuario;
        }
    }
    return mayor;
}

const mayor = obtenerMayor(usuarios);

console.log(mayor);