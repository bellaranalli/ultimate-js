/** PROGRAMACION ORIENTADA A OBJETOS: 4 PILARES FUNDAMENTALES
 * Principios:
 * Encapsulación: agrupar métodos y propiedades.
 * Abstracción: esconder los detalles de implementación. Sabes lo que hará un objeto pero el cómo no te interesa.
 * Herencia: si tenemos objeto A y objeto B, se puede hacer que el objeto B reciba los méetodos del objeto A.
 * Polimorfismo: muchas formas, muchos objetos difetentes. Se puede aplicar un mismo método de guardar por ejemplo, y que solamente la implementación sea diferente.
 */

//Encapsulación
const user = {
    nombre: 'Luz',
    apellido: 'Negra',
    genNombreCompleto() {
        return [this.nombre, this.apellido].join(' ');
    }
}
console.log(user.genNombreCompleto());

//Abstracción
const usuario = new User();
usuario.password = 'Nueva Pass';
user.saver(); //sabemos que ocurre, se crea un nuevo usuario y se guarda, sin saber que implementación se ha hecho en el método.

//Herencia
/**
 * User: id, nombre, guardar()
 * Restaurante: id, nombre, guardar()
 * Motociclista: id, nombre, guardar()
 * 
 * se agregan los métodos y funciones dentro de una fn constructora "madre/padre" y que las hereden las otras fn.
 */

//Polimorfismo
function validaEntidad(entidad){
    //...
    entidad.save();
}