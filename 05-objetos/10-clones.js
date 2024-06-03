let  punto = {
    x: 10,
    y: 15,
};

//assign toma las propiedades de la derecha primero, y si se encuentran en alguún otro obj intermedio, siempre y cuando no sea el primer argumento, serán ignoradas
let clonePunto = Object.assign({}, punto, {z:20, x:1}); 
console.log(punto, clonePunto);

/*let referencia = Object.assign(punto, {z:20, x:1}); 
console.log(referencia);*/

// forma "vieja"
let copiaPunto = Object.assign({}, punto);
console.log(copiaPunto, punto);

//forma 'vieja'
let copia4={};
for (let llave in punto){
    copia4[llave] = punto[llave];
}
console.log(copia4)

//spread operator
let copia3 = {...punto};
console.log(copia3);

