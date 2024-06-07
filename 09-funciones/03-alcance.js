let afuera = 'estoy afuera';

function alcance() {
    afuera = 'estoy dentro'; //le cambio el valor
    function saludo() { }
    var vieja = 'ya no debes usar esto';
    let variable = 'hola mundo';
    const constante = 'Hola Mundo!';
    console.log(saludo);
    console.log(vieja);
    console.log(variable);
    console.log(constante);
}
console.log(afuera);
alcance();
console.log(afuera);

/*las fn y variables declaradas dentro de una fn, le pertenecen a la misma. 
si se quiere acceder a ellas, hay que hacerlo dentro de los {} y no por fuera. */