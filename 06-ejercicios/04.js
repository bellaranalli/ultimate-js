//fn que permite comprobar cuáles propiedades de un objeto en particular son métodos
let objeto = {
    id: 1,
    name: 'Lucrecia',
    login: function () { },
    logout: function () { },
}

function cualesMetodos(obj) {
    for (let llave in obj) {
        if (typeof obj[llave] === 'function') {
            console.log(llave)
        }
    }
}

cualesMetodos(objeto)