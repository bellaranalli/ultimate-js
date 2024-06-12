//construir usuarios con fn constructor
function Usuario(name) {

        this.name = name;
        this.id = Math.random();
}

let user = new Usuario('Pomelo');
let user2 = new Usuario('Rosado');
console.log(user, user2);