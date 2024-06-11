function User() {
    this.name = 'hola mundo';
}

User.prototype.login = function () {
    console.log('iniciando sesión', this.name);
}

let user = new User();

//iterar las propiedades de un objeto ylas que se encuentran dentro de su prototipo
for(let prop in user)
    if (!user.hasOwnProperty(prop))//si el obj contiene el mismo, la prop que estemos analizando
    console.log(prop);

//si solo se necesita un array que contenga única y exclusivamente las propiedades del objeto de la instancia misma:
console.log(Object.keys(user)); //muestra name porque es la unica que se encuentra dentro de user


