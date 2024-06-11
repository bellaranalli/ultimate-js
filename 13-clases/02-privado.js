/*function User(a) {
    let name = 'a';
    this.getName = function () { return name; }
}*/

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    #logger(){}

    getName() {
        this.#logger();
        return this.#name //# declara propiedad o métodos privados
    }
}

const u = new User('ASD');

