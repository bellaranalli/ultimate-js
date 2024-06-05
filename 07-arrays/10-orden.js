let numeros = [15, 10, -3];

numeros.sort(); //ordena de menor a mayor/ funciona con letras
numeros.reverse(); //ordena de mayor a menor/ funciona con letras
console.log(numeros);

let letraMayuscula = ['Z', 'a', 'm', 'd']; //en ascii table las lestras en mayúscula poseen un número menor a las minúsculas (criterio en computación), por lo que la Z queda primero en el sort
letraMayuscula.sort();
console.log(letraMayuscula);

let letraMayuscula1 = ['Z', 'a', 'm', 'd']; //para que queden bien ordenadas se añade una fn al método sort
letraMayuscula1.sort((a, b) => { //se puede colocar el argumento con el nombre que se desee, puede ser x, z
    /**
     * a antes que b => -1
     * b antes que a => 1
     * si son iguales => 0
     */
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if (alower < blower) {
        return -1;
    }
    if (alower > blower) {
        return 1;
    }
    return 0;
});
console.log(letraMayuscula1);

let usuarios = [
    { edad: 15, nombre: 'Pomelo' },
    { edad: 18, nombre: 'Rosado' },
    { edad: 10, nombre: 'Manzana' },
];

usuarios.sort((a, b) => { //lo mismo que arriba pero simplificando código
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
});
console.log(usuarios)