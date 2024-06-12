let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar'
form.append(input);
form.append(btn);

document.body.append(form);

//EVENTOS
form.onmouseenter = e => {
    console.log('entra el mouse', e);
}

form.onmouseleave = e => {
    console.log('sale el mouse', e);
}

input.onfocus = e => {
    console.log('input con focus');
}

input.onblur = e => {
    console.log('input pierde el foco');
}

input.onchange = e => {
    console.log('valor cambia', e.target.value);
}

/*btn.onclick = e => {
    e.preventDefault();//evita que se refresque por default al hacer click
    console.log('btn clickeado');
}*/

btn.addEventListener('click', e => { //se le pasan 2 argumentos, el 1ro es el evento al que le queremos vincular una función
    e.preventDefault();
    console.log('btn clickeado');
});
