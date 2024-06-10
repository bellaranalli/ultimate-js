const obj = {
    name: 'Camelia',
};

function Extender() {
    this.login = () => {
        console.log('Iniciando sesión', this.name);
    }
    this.logout = () => {
        console.log('Cerrando sesión', this.name);
    }
}


Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();