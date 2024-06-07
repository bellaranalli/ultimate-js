console.log(saludo);
console.log(vieja);
console.log(hola);
console.log(chao);

function saludo (){}
let hola = 'hola';
const chao = 'chao';
var vieja = 'ya no debes usar esto';

//con las fn y las var, el motor de js las ubica directamente al comienzo del archivo. a las fn las toma completas con su contenido, a diferencia de las var que no les pasa las definiciones asignadas y les asigna undefined.
//con let y const pasa lo mismo, pero arroja el error de no poder acceder a las mismas hasta que no se encuentren definidas.