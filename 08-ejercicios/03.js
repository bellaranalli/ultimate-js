//devolver usuarios que no son free
const usuarios = [
    { edad: 17, nombre: 'Pomelo', plan: 'premium' },
    { edad: 12, nombre: 'Rosado', plan: 'free' },
    { edad: 33, nombre: 'Almendra', plan: 'free' },
    { edad: 20, nombre: 'Nuez', plan: 'gold' },
];

function getPaidUsers(usrs) {
    
    return usrs.filter(usrs => usrs.plan !== 'free');
}

console.log(getPaidUsers(usuarios));