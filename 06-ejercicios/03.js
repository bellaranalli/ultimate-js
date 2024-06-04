//construir una fn que nos permite saber si dos objetos son similares
function similares(obj1, obj2){
    let distintos = false;
    for (let llave in obj1) {
        if(obj1[llave] !== obj2[llave])
            distintos = true;
        }
   return !distintos;
}

let resultado = similares(
{id:1, name: 'Pomelo'},
{id:1, name: 'Rosado'}
);

console.log(resultado)