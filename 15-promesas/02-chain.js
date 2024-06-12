let promesa1 = new Promise((res, rej) => {
    res(12);
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1.then(valor => {
    console.log(valor)
}).then(() => {
    console.log('La segunda promesa');
})

promesa1.then(valor => {
    return valor + 18;
}).then(valor2 => {
    console.log('La segunda promesa', valor2); //devuelve 30
})

promesa1.then(valor => {
    if (valor > 10) {
        return promesa2;
    }
}).then(valor2 => {
    console.log('La segunda promesa', valor2); //devuelve 15
})