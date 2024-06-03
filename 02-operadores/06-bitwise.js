//Decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//Binario: 0, 01

//bit:  0 1 (un digito en binario)
//Byte: 8 bits (se pueden almacenar caracteres, numeros, simnolos)
//Byte se representan con 8 bits 00000000

//Byte: 00000000 -> 0
//Byte: 00000001 -> 1
//Byte: 00000010 -> 2
//Byte: 00000011 -> 3
//Byte: 00000100 -> 4
//Byte: 00000101 -> 5
//Byte: 00000110 -> 6

//operador or en bitwise no devuelve uno u otro sino que crea un nuevo byte en base a si comparten 1 en la cadena
console.log(1 | 3); //00000011 (devuelve 3)
console.log(1 | 4); //00000101 (devuelve 5)
console.log(3 | 5); //00000111 (devuelve 7)

//operador and devuelve  solo lo que marca 1
console.log(1 & 3); //00000001 (devuelve 1) 
console.log(1 & 4); //00000000 (devuelve 0) 
console.log(3 & 5); //00000001 (devuelve 1) 


