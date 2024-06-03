const saludo = "Hola Mundo!";

const despedida = new String("Chao Mundo(");
console.log(typeof saludo); // devuelve string
console.log(typeof despedida); // devuelve objetc

console.log(saludo.length); // devuelve el largo del string 11
console.log(saludo.indexOf("Mu")); //muestra el indice donde se encuentra Mu dentro del string saludo 5 / los indices parten con base 0
console.log(saludo.indexOf("z"));
console.log(saludo.includes("z")); //devuelve true o false
console.log(saludo.replace("Mundo", "Salame")); // para reemplazar primer argumento por el segundo

//para capturar el string del método replace hay que guardarlo dentro de una nueva variable
let nuevoSaludo = saludo.replace("Mundo", "Salame");
console.log(nuevoSaludo, saludo);
console.log(saludo.toLowerCase()); //pasa texto a minúscula
console.log(saludo.toUpperCase()); //pasa texto a mayúscula
console.log(saludo.substring(0, 3)); // funciona con indices y con dos argumentos, donde comienza y donde termina (no incluye el caracter final)
console.log(saludo.substr(2, 4));

const epsacios = "   Hola    Mundo!   "
console.log(epsacios.trim()); //quita espacios de la izq y derecha
console.log(epsacios.trimStart()); //quita los espacios de la izquierda
console.log(epsacios.trimEnd()); //quita los espacio de la derecha