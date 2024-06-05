/////every
let usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },
];

let todosActivos = usuarios.every(u => {
    console.log('todos activos', u.id);
    return u.activo;
})

console.log(todosActivos);

/////some
let usuarios1 = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },
];

let algunoActivo = usuarios1.some(u =>{
    console.log(u.id);
    return u.activo;
})

console.log(algunoActivo);