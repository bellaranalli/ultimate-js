const usuario = {
    nombre: 'Pomelo',
    apellido: 'Rosado',
    get nombreCompleto() {
        return `${usuario.nombre} ${usuario.apellido}`;
    },
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

usuario.nombreCompleto = 'Naranja Mandarina';
console.log(usuario.nombreCompleto);