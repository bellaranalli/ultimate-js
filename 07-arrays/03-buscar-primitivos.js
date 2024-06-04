const letras = ['a', 'b', 1, 'c', 'd', 1];

console.log(letras.indexOf('c')); //3
console.log(letras.indexOf(1, 3)); //devuelve el primer indice que encuentra con ese valor indicado al ppcio., no todos 5 (el segundo argumento indica desde donde se inicia la búsqueda-puede no indicarse e iniciaria en 0-)
console.log(letras.lastIndexOf(1)); //inicia búsqueda desde el final devolviendo el indice del valor indicacdo correcto 5
console.log(letras.indexOf(20)); //-1 es que no se encuentra el indice dentro del array 

console.log(letras.indexOf(1) !== -1); //devuelve true  pero no se usa

console.log(letras.includes('d')) //devuelve true