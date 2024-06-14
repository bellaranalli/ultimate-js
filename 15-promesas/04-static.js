/*let promesa1 = new Promise((res, rej) => {
    res(5);
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1.then(valor => {
    if (valor > 10) {
        return promesa2;
    }
    return  Promise.reject('Valor menor que 10');
    
}).then(() => {
    console.log('segunda promesa');//no lo muestra por consola, ya que una vez que rechaza, saltea todo lo que sigue hasta el catch
    return valor2;
}).catch(e => console.log(e))
 .finally(() => console.log('acá estamos en finally')); //nunca recibe argumentos el finally*/

/////////////////////////////////////////////////////
 let promesa1 = new Promise((res, rej) => {
    res(5);
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1.then(valor => {
    if (valor > 10) {
        return promesa2;
    }
    return  Promise.resolve(555);

}).then(valor2 => {
    console.log('segunda promesa', valor2);//no lo muestra por consola, ya que una vez que rechaza, saltea todo lo que sigue hasta el catch
    return valor2;
}).catch(e => console.log(e))
 .finally(() => console.log('acá estamos en finally')); //nunca recibe argumentos el finally