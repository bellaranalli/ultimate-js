/**
 Promesas:
 Representan el estado de una petición: Pending, Rejected, Fulfilled

 Se utilizan para consultas a bases de datos, peticiones a servidores y para webworkers (cálculos muy pesados de realizar para el explorador web)
 */

let promesa = new Promise((resolve, reject) => {
    //resolve(42); //devuelve fulfilled
    //setTimeout(()=> resolve(42), 10000) //devuelve pending y después de 10 seg devuelve fulfilled
    setTimeout(() => resolve('Hola mundo'), 10000) //devuelve pending y después de 10 seg devuelve rejected
});

promesa.then(
    valor => console.log(valor),
    e => console.log('error', e),
);