/*function User(name) {
    this.name = name;
    this.instancia = function () { };
}

User.prototype.login = function(){
    console.log('Hola mundo!')
}*/

class User {
    constructor(name) {
        this.name = name;
        this.instancia = function () { }
    }

    activo = true;

    logout = () => {
        console.log('logout...')
    }//declarado así se le asigna al user

    login() {
        console.log('login...')
    }//declarado así pertenece al prototipo
}
const u = new User('Tutti Frutti');
console.log(u)