function User() {
    this.name = 'hola mundo';
    //logger: método de instancia
    this.logger= function(){
        console.log('loggeando...');
    }
}


const user1 = new User();
const user2 = new User();

//login: método de prototipo
User.prototype.login = function () {
    console.log('iniciando sesión', this.name);
}

User.prototype.toString= function(){
    console.log('Usuario:', this.name);
}
user1.toString();
console.log(user1.login());
console.log(user1.logger());



//dentro del prototipo podemos llamar a métodos y funciones de la función constructora, y dentro de la función constructora podemos llamar a métodos y funciones dentro del propotitpo.

