const nombre = 'Bella';
const nombre2 = 'Pedro';
const apellido = 'Perez';
const nombreCompleto = nombre2 + ' ' + apellido;
const plantilla = `Hola mundo y ${nombre}!

Bienvenidos a "Ultimate js" :)

Saludos ${nombreCompleto}.
`
console.log(plantilla); 
//////////////////////////////////////////
function plantillaFn(nombre){ 
    return `Hola mundo y ${nombre}!

Bienvenidos a "Ultimate js" :)

Saludos ${nombreCompleto}.
`}

console.log(plantillaFn('Juana'))