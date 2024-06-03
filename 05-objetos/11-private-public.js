function Usuario(){
    this.name = 'Bella';

    let log = function(){
        console.log('loggin...');
    }

    this.guardar = function () {
        log()
        console.log('guardando...');
    }
}

const usuario = new Usuario ();
usuario.guardar();

//todo lo que se asigne a la palabra reservada de this será público (se accede desde fuera)
// en este ejemplo, la variable log es privada dentro de la fn Usuario.