function getProto(u){
    return Object.getPrototypeOf(u)
}
function Entidad(){}

Entidad.prototype.save = function(){
    console.log('guardando desde Entidad...');
}

function User() {}
//method override
User.prototype.save = function(){
    console.log('Guardando desde User...')
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User();
console.log(getProto(getProto(u)).save());