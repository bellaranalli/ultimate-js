const ahora = new Date();
//console.log(ahora);
const fecha = new Date('December 11 1986 14:15 GMT-0300'); //'mes día año'
console.log(fecha)

const fecha2 = new Date(1986, 11, 25, 14, 15); //año, mes(mes 0 enero, mes 11 diciembre) día, hora, minutos
console.log(fecha2)

const fecha3= new Date(1986, 11, 25, 14+15, 15); //se toma el gmt de la zona en la que uno se encuentra y sumarle el gmt de la zona de destino (ej con fecha de nueva zelanda)
console.log(fecha3)

console.log('DATEstring', fecha3.toDateString());//formato de visualización amigable
console.log('ISOstring', fecha3.toISOString()); //formato fácil de almacenar y de transformar a otras fechas (para pasar fecha de cliente a servidor o al revés)
console.log('TIMEstring', fecha3.toTimeString()); //muetra hora pero no fecha

fecha3.setFullYear(1980); //con métodos get se obtiene el dato, con el set se modifica
console.log(fecha3)