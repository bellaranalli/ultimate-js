//copiar obj sin usar spread operator ni Object.assing

let obj1 = { id: 1, name: 'Rigoberta' };
function crearCopia(obj) {
    let copia = {};
    for (let llave in obj) {
        copia[llave] = obj[llave];
    }
    return copia
}

let obj2 = crearCopia(obj1);
console.log({ obj1, obj2 })