const usuarios = [
    { id: 1, name: 'Pomelo' },
    { id: 1, name: 'Mandarina' },
    { id: 2, name: 'Rosado' },
];

//el método find devuelve el primer elemento que cumpla con lo que se retorna (lo mejor es que la propiedad buscada sea única)
//la fn dentro del método find se la conoce como predicate y devuelve boolean
const resultado = usuarios.find(function (usuario) {
    return usuario.id === 1;
 });
console.log(resultado);

//con arrow fn
//con findIndex devuelve indice del objeto en vez del objeto mismo
const resultado2 = usuarios.findIndex(usuario =>
     usuario.name === 'Mandarina');
console.log(resultado2);
