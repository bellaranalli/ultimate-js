function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () { console.log('Dibujando...') }
}

//método call pasa la propiedad de la variable a la fn, tomando this el valor del objeto
let punto = {z: 7};
Punto.call(punto, 1, 2);

//igual que call pero los argumentos se pasan como array
Punto.apply(punto, [1, 2]);

console.log(punto)

//el uso del construnctor Function no es una buena práctica
/*const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function () { console.log('Dibujando...') }
`);

const p = new Point(1, 2);
console.log(p)*/