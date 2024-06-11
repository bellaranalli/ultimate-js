function mixin(Ctr, ...args){
    Object.assign(Ctr.prototype, ...args);
}

let vuela = {
    vuela(){
        console.log('puedo volar')
    }
}
let nada = {
    nada(){
        console.log('puedo nadar')
    }
}
let banio = {
    banio(){
        console.log('me baño')
    }
}
let camina = {
    camina(){
        console.log('puedo caminar')
    }
}

//vuela, nada, camina, va al baño
function Pato() {
    this.name = 'Donald'
}
mixin(Pato, nada, banio, camina, vuela);
console.log(Pato.prototype, new Pato());


//nada, camina, va al baño
function Perro() { }
mixin(Perro, nada, banio, camina);
console.log(Perro.prototype, new Perro());
let p = new Perro();//pongo p dentro de la consola de chrome y puedo inspeccionarlo-mismo resultado

//nada, va al baño
function Pez() { }
mixin(Pez, nada, banio);
console.log(Pez.prototype, new Pez());

//vuela, no nada, no camina, no va al baño
function Avion() { }

mixin(Avion, vuela);
console.log(Avion.prototype, new Avion());