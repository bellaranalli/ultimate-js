/*con palabra reservada const no se permite cambiar el valor de la variable pero si se puede 
agregar o quitar propiedades, pero si el valor asignado es un objeto si se puede asignar un nuevo valor a las propiedades del objeto*/

const user = {id: 1}; 

user.name = 'Bella';
user.guardar = function () {
    console.log('Guardando', user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//para que no pueda ser modificado el valor del objeto ni agregar o eliminar propiedades del mismo
//const user1 = Object.freeze({id: 1});

//Para cambiar valor a las porpiedades pero no agregar ni quitar
const user1 = Object.seal({id: 1});

user1.name = 'Nico';
user1.id = 2;
console.log(user1);

