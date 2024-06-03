const punto = {
    x: 10,
    y: 15,
    dibujar(){ //es lo mismo que dibujar: function(){}
        console.log('dibujando')
    }
};

//delete punto.dibujar;
if ('dibujar' in punto){ //con la instrucción in puedo verificar si un objeto tiene una propiedad o método en particular
    punto.dibujar();
}

/*let keys = Object.keys(punto);
console.log(keys)*/
//devuelve lo mismo ↑↑↑
//console.log(Object.keys(punto));

//assign, keys y entries son métodos estáticos del constructor Objetc
for (let llave of Object.keys(punto)){ // of permite listar la propiedad del objeto seguida de su valor/ con of solo se puede iterar un array
    console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)){  //de este modo devuelve un array con la propiedad y valor
    console.log(entry);
}

for (let llave in punto){
    console.log(llave, punto[llave]);
}