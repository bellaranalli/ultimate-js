//combinar y divdir array

let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2); //para combinar, no modifica ni arr1 ni arr2  devuelve nuevo arr
console.log(combinados, arr1, arr2);

//let divididos = combinados.slice(1, 3); //pasar indice donde queremos comenzar y finalizar

//let divididos = combinados.slice(1); //aca divide solo desde el indice 1

let divididos = combinados.slice(); //genero una copia del array y no una referencia, por lo tanto no es el mismo array, pero los valores siguen siendo referencias
console.log(divididos);