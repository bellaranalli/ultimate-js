//métodos para modificar el contenido de la const letras

const letras = ['a', 'b'];

//agregar al final del array
letras.push('c', 'd');

//agregar al comienzo
letras.unshift('y', 'z')

//agregar entremedio a partir de donde se indica el indice

letras.splice(3, 0, 'A', 'B')

console.log(letras);