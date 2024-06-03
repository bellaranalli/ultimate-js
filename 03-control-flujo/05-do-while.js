//en vez de evaluar la condicion al comienzo como en el while, lo hace al final

let i = 2;
/*while (i < 2) {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
}*/

do {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
} while (i < 2);