const Entidad = {
    save() {
        console.log('save en Entidad');
    }
}

const Actualizar = {
    update() {
        console.log('update en Entidad');
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
    save() {
        console.log('save en User');
    }
}
//Object.assign(User.prototype, Entidad);
const nuevoProto = Object.assign({}, Entidad, Actualizar);
Object.setPrototypeOf(User.prototype, nuevoProto);

const u = new User('ASDF');
u.save();