const obj = {
    name: 'Camelia',
};

/*function extender(usuario) {
    const metodos = {
        login() {
            console.log('Iniciando sesión', this.name);
        },
        logout() {
            console.log('Cerrando sesión', this.name);
        },
    };
    return Object.assign(usuario, metodos);
}*/

function extender(usuario) {
    usuario.login = () => {
        console.log('Iniciando sesión', this.name);
    }
    usuario.logout = () => {
        console.log('Cerrabdo sesión', this.name);
    }
    return usuario;
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
