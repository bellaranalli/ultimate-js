//siempre con camelCase
function crearUsuario(name, email){
    return {
        email,
        name,
        activo: true, 
        recuperarClave: function () {
            console.log('recuperando clave...')
        }, 
    };
}

let user1 = crearUsuario('Bella', 'mail@mail.com')
let user2 = crearUsuario('Bella2', 'mail2@2mail.com')

console.log(user1, user2)