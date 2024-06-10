function sumaTodo(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El parámetro no es un array por eso da error');
    }
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`Elemento ${el} no es número`);
        }
        return acc + el
    });
}

console.log(sumaTodo([1, 2, 3, 4]));

try {
    console.log(sumaTodo([1, 2, 3, 4 /*NaN, 'Hola mundo'*/]));
} catch (e) {
    console.log(e.message)
} //devuelde error pero permite seguir ejecutando código

console.log('después del try catch')