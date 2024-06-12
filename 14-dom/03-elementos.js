let el = document.createElement('p');

el.innerText = "Nuevo elemento creado";

document.body.append(el);

//el.innerText = "<ul><li>Hola Mundo</li></ul>"; //lo pasa como texto plano
//el.innerHTML = "<ul><li>Hola Mundo</li></ul>"; //lo pasa como elemento html

el.style = 'background-color: red; font-weight: bold';
el.className= 'parrafo';
el.id = 'mi-parrafo';

//propiedad personalizada:
el.setAttribute('mipropiedad', 'mipropiedad');
el.getAttribute('mipropiedad');
el.hasAttribute('mipropiedad');