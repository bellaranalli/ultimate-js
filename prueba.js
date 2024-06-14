let charvalue = " ";

function FunctiontoSplitnumber(charvalue, position) {
  if (!charvalue.trim() || /^\d$/.test(charvalue.trim())) {
    if (position <= 5) {
      charvalue = "0000" + charvalue.trim();
    } else {
      charvalue = charvalue.trim() + "00000000";
    }
  }

  let firstpart = charvalue.substring(0, position);
  let secondpart = charvalue.substring(position, charvalue.length);
  return (firstpart + '-' + secondpart);
}

console.log(FunctiontoSplitnumber(charvalue, 5));