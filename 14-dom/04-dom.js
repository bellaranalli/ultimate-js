let el = document.createElement('p');

el.innerText = "Nuevo texto";

document.body.append(el);

el.remove(); //lo remueve

document.body.prepend(el); //lo agrega al comienzo. 

//si lo llamo dos veces como por ej acá, con .append y .prepend, será el último el que impacte en el dom

let div = document.createElement('div');
div.innerText = "Soy un texto cambiado";

el.replaceWith(div); //reemplaza el texto de el por el de div

document.body.replaceChild(el, div); //el primer argumento es lo que quiero que reemplace y lo reemplazado el segundo argumento

document.body.removeChild(el); //eliminar el elemento
document.body.appendChild(el); //agrega los elementos al final

document.body.insertBefore(div, el); //insertar antes 
document.body.insertAdjacentElement('beforebegin', div) //el primer argumento es un string de solo 4 opciones. beforebegin inserta antes de la etiqueta body. afterbegin lo inserta ni bien comineza la etiqueta body. beforend dentro de la etiqueta pero al final. afterend al final fuera de la etiqueta.

document.body.insertAdjacentHTML();
document.body.insertAdjacentText();

