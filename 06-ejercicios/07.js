//agregar propiedad de id al objeto
let objeto = { name: 'Pomelo' };

function agregarId(obj) {
    if (typeof obj === 'object') {
        obj.id = Math.random()
    }
    return obj
}

agregarId(objeto);
console.log(objeto)



/* forma no correcta:
let objeto = { name: 'Pomelo' };
objeto.id = Math.random();
let objeto = { name: 'Pomelo' };

objeto.id = Math.random();
function agregarId(obj) {
    objeto.id
}

agregarId(objeto);
console.log(objeto)
*/