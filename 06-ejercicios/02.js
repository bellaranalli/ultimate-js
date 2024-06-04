//construir usuarios con factory functions
function createUser(name) {
    return {
        name,
        id: Math.random(),
    };
}

let user = createUser('Pomelo');
let user2 = createUser('Rosado');
console.log(user, user2)