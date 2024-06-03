let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
    //break; si descomento el break corta la ejecucion del codigo hasta donde se encuentre el break.
    case 'guardar':
        console.log('Accion de guardar');
        break;
    default:
        console.log('Accion no reconocida') //si la variable no fuese por ejemplo listar y fuese actualizar.
}