const usuario = {
    name: 'Tarta',
    ciudadanias: ['Chile', 'Colombia', 'Nueva Zelanda'],
    mostrarCiudadanias() {
        //console.log(this.ciudadanias)
        this.ciudadanias.forEach(ciudadania =>{
            console.log(this.name, ciudadania);
        });
    }
};
usuario.mostrarCiudadanias();