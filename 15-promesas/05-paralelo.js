const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo')
});

/*Promise.all([p1, p2, p3])
.then(valores => console.log('all', valores))
.catch(e => console.log('ERROR all', e));*/

/*Promise.race([p1, p2, p3]) //muestra solo el valor de 3 que es la primera promesa que se resuelve
    .then(valor => console.log('race', valor))
    .catch(e => console.log('ERROR race', e));*/

/*Promise.any([p1, p2, p3]) //Si la primera promesa es rechazada, la ignora y evlúa la siguiente, hasta que alguna sea resuelta
    .then(valor => console.log({ valor }))
    .catch(e => console.log({ e }));*/

Promise.allSettled([p1, p2, p3]) //Indpendientemente de si son resueltas o rechazadas, se envuelven en un objeto que las contiene. No se cae en el catch
    .then(valores => console.log({ valores }))
    .catch(e => console.log({ e }));
