//DOM document object model

//HTMLElement
let htmlElement = document.getElementById('cuerpo'); //por ID asignado a la etiqueta de HTML

//HTMLCollection
let elementosRed = document.getElementsByClassName('red'); //por clase de CSS

//NodeList
let elemntosMora = document.getElementsByName('Mora');

//HTMLCollection <- devuelve todos los elementos <p>
let parrafos = document.getElementsByTagName('p');

//HTMLElement <- solo un elemento
let el = document.querySelector('#cuerpo'); //buscar por id se usa #, por clase de css se usa .

//NodeList <- devuelve todos los elementos <p>
let els = document.querySelectorAll('p');

//HTMLCollection siempre refleja los últimos cambios realizados en el DOM, NodeList no siempre sincroniza.
let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);

//si agrego un nuevo <p> pstatic no se actualiza:
let nuevoP = document.createElement('p');
document.body.append(nuevoP); 
console.log(plive, pstatic);

