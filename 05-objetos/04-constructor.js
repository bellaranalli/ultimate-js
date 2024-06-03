//funciones constructoras en uuperCamelCase
function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){ //método: una función que fue asignada a una propiedad de un objeto.
        console.log('recuperando clave...');
    }
}

let usuario = new Usuario();

console.log(usuario)