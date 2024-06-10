

//dentro de un objeto hace referencia a un objeto
const user = {
    name: 'Tarta',
    login() {
        console.log(this);
    }
};

user.logout = function logout() {
    console.log(this);
}

user.logout();

//si se encuentra dentro de una fn hace referencia al objeto window
//en Node hace referencia al objeto global
function log() {
    console.log(this);
}

log();

//si se usa la palabra new, hace referencia al objeto que seré creado
function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('Hola LOG');