//4 formas de vaciar contenido de un array

//1- asignarlo nuevamente vacío /no recomendada/
let arr = [1, 2];
arr = [];
console.log(arr)

let arr1 = [1, 2];
let arr2 = arr1;
arr1 = [];
console.log(arr2, arr); //el contenido en arr2 sigue existiendo por lo tanto, no se vació

//2- manipular la longitud del array a 0
let arr3 = [1, 2];
arr3.length = 0;
console.log(arr3)

let arr4 = [1, 2];
arr4.length = 0;
arr5 = arr4;
console.log(arr4, arr5);

//3- con método splice
let arr6 = [1, 2];
arr6.splice(0, arr6.length); //le indicamos desde donde hasta toda la longitud del array
console.log(arr6)

//4- no recomendada, utilizando loop
let arr7 = [1, 2];
while (arr7.length > 0){ //evaluan long. del arr que sea mayor a 0, luego utilizamos el método pop
    arr.pop();
}
console.log (arr7);