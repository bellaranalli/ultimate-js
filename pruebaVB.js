/*let charvalue = "0000012345678";
function FunctiontoSplitnumber(charvalue, position) {
  let firstpart = charvalue.substring(0, position);
  let secondpart = charvalue.substring(position, charvalue.length);
  return (firstpart + '-' + secondpart);
}

console.log(FunctiontoSplitnumber(charvalue,5))*/

/*let charvalue = "0000012345678";

function FunctiontoSplitnumber(charvalue, position) {

  if (!/\d/.test(charvalue)) {
    charvalue = "0000000000000";
  }

  let firstpart = charvalue.substring(0, position);
  let secondpart = charvalue.substring(position, charvalue.length);
  return (firstpart + '-' + secondpart);
}

console.log(FunctiontoSplitnumber(charvalue, 5)); */


let nroFactura = "12345abcd";

function FunctiontoSplitnumber(nroFactura) {
  /* if (!nroFactura.trim() || /^\d$/.test(nroFactura.trim())) {
     if (position <= 5) {
       nroFactura = "00000" + nroFactura.trim();
     } else {
       nroFactura = "00000000" + nroFactura.trim();
     }
   }*/

     if (/^[0-9]+$/.test(nroFactura)) {
      alert("dato ok");
    } else {
      alert("dato incorrecto");
    }

  let firstpart = nroFactura.substring(0, 5);
  let secondpart = nroFactura.substring(5, 14) //.padStart(8, '0');
  /*let facturaPartida = [nroFactura.substring(0, position), nroFactura.substring(position, position + 8).padStart(8, '0')]*/

  return [firstpart, secondpart];


}


let result = FunctiontoSplitnumber(nroFactura)


console.log(result)


