let promesa1 = new Promise((res, rej) => {
    res(12);
});

let promesa2 = new Promise((res, rej) => {
    rej(15);
});

promesa1.then(valor => {
    if (valor > 10) {
        return promesa2;
    }
}).then(() => {
    return valor2;
}).catch(e => console.log(e)); //se ejecuta solo si una de las promesas es rechazada

/////////////////////////////////
let promesa3 = new Promise((res, rej) => {
    rej(12);
});

let promesa4 = new Promise((res, rej) => {
    res(15);
});

promesa3.then(valor => {
    if (valor > 10) {
        return promesa4;
    }
}).then(() => {
    console.log('segunda promesa');//no lo muestra por consola, ya que una vez que rechaza, saltea todo lo que sigue hasta el catch
    return valor2;
}).catch(e => console.log(e))
 .finally(() => console.log('acá estamos en finally')); //nunca recibe argumentos el finally
