function suma(a, b, ...rest) {
    console.log(rest);
}
console.log(suma(1, 2, 3, 4, 5, 6));

///////////
const sumaa = (a, b, ...rest) => {
    console.log(rest);
}
console.log(sumaa(1, 2, 3, 4, 5, 6));
///////////
const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

logMsg('Servidor:', 'Error 1', 'Petición aceptada', 'Socket activo')

///////////
function logMsg1(desc, ...msgs) {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

logMsg1('Servidor:', 'Error 1', 'Petición aceptada', 'Socket activo')

///////////
let mensajes = ['Error 1', 'Petición aceptada', 'Socket activo']
logMsg('Cliente móvil:', ...mensajes, 'Otro error');