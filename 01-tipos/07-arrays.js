let animales = ['chanchito', 'caballo'];
console.log(animales);
console.log(animales[0]);
animales[2] = 'dragon'; // para agregar un elemento al array
console.log(animales);

animales[10] = 'pez';
console.log(animales[7]); // muestra undefined por consola ya que el espacio 7 no esta siendo utilizado
console.log(typeof animales);
console.log(animales.length); // muestra la cantidad de elementos que tiene el array en especifico