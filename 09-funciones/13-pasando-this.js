function saludar (...rest){
    console.log(this, rest);
}
saludar.call({propiedad: 'Hola te saludo'}, 1, 2); //el resto de los argumentos se pasan uno a uno
saludar.apply({propiedad: 'Hola te saludo'}, [3, 6]); //el resto de los argumentos se pasan como array
saludar.bind({propiedad: 'Hola te saludo'})(7, 8);

(function saludar1 (...rest){
    console.log(this, rest);
}).bind({propiedad: 'Hola te saludo'})(5, 9);

//--------------------
const usuario = {
    name: 'Tarta',
    ciudadanias: ['Chile', 'Colombia', 'Nueva Zelanda'],
    mostrarCiudadanias() {
        this.ciudadanias.forEach(function(ciudadania){
            console.log(this.name, ciudadania);
        }.bind(this));
    }
};
usuario.mostrarCiudadanias();
//------

const usuario1 = {
    name: 'Chocolate',
    ciudadanias: ['Chile', 'Colombia', 'Nueva Zelanda'],
    mostrarCiudadanias() {
        let self = this;
        this.ciudadanias.forEach(function(ciudadania){
            console.log(self.name, ciudadania);
        });
    }
};
usuario1.mostrarCiudadanias();
//------

const usuario2 = {
    name: 'Pera',
    ciudadanias: ['Chile', 'Colombia', 'Nueva Zelanda'],
    mostrarCiudadanias() {
        this.ciudadanias.forEach(function(ciudadania){
            console.log(this.name, ciudadania);
        }, this);
    }
};
usuario2.mostrarCiudadanias();