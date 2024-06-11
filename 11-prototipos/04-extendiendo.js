Object.prototype.isEqual = function(obj){
    //...
}

let x = {};
x.isEqual({a : 1});

//no es aconsejable extender propotiposde funciones constructoras que ya tiene js, presenta problemas con librerias o dependencias que se encarguen de extender prototipos de Object, Array, Numbes, Boolean, etc.