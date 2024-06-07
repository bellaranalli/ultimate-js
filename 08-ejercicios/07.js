const usuarios = [
    { edad: 17, nombre: 'Pomelo', plan: 'premium' },
    { edad: 12, nombre: 'Rosado', plan: 'free' },
    { edad: 33, nombre: 'Almendra', plan: 'gold' },
    { edad: 20, nombre: 'Nuez', plan: 'free' },
];

//lo resolví  así 
function groupBy(arr, prop) {
    return arr.reduce((acc, el)=> {
        let llave = el.plan;
    
        acc[llave] = acc[llave] ? acc[llave]  : [];
        acc[llave].push(el);
        return acc;
      }, {})
}

const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });

//resolución del video
function groupByProp(arr, prop) {
    return arr.reduce((acc, el)=> {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor]  : [];
        acc[valor].push(el);
        return acc;
      }, {})
}

const grouped1 = groupByProp(usuarios, 'plan');
console.log({ grouped1 });