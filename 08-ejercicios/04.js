//cuantos mayores y cuantos premium (incluye gold)
const usuarios = [
    { edad: 17, nombre: 'Pomelo', plan: 'premium' },
    { edad: 12, nombre: 'Rosado', plan: 'premium' },
    { edad: 33, nombre: 'Almendra', plan: 'free' },
    { edad: 20, nombre: 'Nuez', plan: 'gold' },
];
/*
function cuantosPremium(usrs){
   return usrs.reduce((acc, el) => {
    if(el.plan !== 'free'){
        return acc +1
    }
    return acc;
   }, 0);  
}*/

function cuantosPremium(usrs) {
    return usrs.reduce((acc, el) => 
        el.plan !== 'free' ? acc + 1 : acc, 0);
}


/*function cuantosMayores(usrs) {
    return usrs.reduce((acc, el) => {
        if (el.edad > 17) {
            return acc + 1
        }
        return acc;
    }, 0);
}*/

function cuantosMayores(usrs) {
    return usrs.reduce((acc, el) => 
         el.edad > 17 ? acc + 1 : acc, 0);
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));
