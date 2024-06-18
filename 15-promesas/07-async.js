/*let promesa1 = param1 => new Promise((res, rej) => {
    const b = 'Hola Mundo';
    res(b);
});

let promesa2 = param2 => new Promise((res, rej) => {
    res(param2 + ', Hola Usuario')
});

let promesa3 = (param1, param2) => new Promise((res, rej) => {
    res('Promesa 3')
});

/*Promise.resolve('Primer Valor')
    .then(a => promesa1(a))
    .then(b => promesa2(b))
    .then((a, b) => promesa3(a, b))*/

/*Promise.resolve('Primer Valor') //Pirámide de la muerte, triángulo de la tortura, mala práctica
    .then(a => {
        return promesa1(a)
            .then(b => {
                return promesa2(b)
                    .then(() => promesa3(a, b))
            })
    })*/

//Solución no tediosa
let promesa1 = param1 => new Promise((res, rej) => {
    const b = 'Hola Mundo';
    res(b);
});

let promesa2 = param2 => new Promise((res, rej) => {
    res(param2 + ', Hola Usuario')
});

let promesa3 = (param1, param2) => new Promise((res, rej) => {
    res('Promesa 3')
});


async function main() {
    try {
        const a = await Promise.resolve('Primer Valor');
        const b = await promesa1(a);
        const _ = await promesa2(b);
        promesa3(a, b);
    } catch (error) {
        console.log({ error });
    }
}
main();

/////////////////solución a la pirámide de forma tediosa ya que implica modificar todo el código

/*let promesa1 = param1 => new Promise((res, rej) => {
    //calculamos algo...
    const b = 'Hola Mundo';
    res({ contexto: b });
});

let promesa2 = ({ contexto: param2 }) => new Promise((res, rej) => {
    //calculamos algo...
    res({ contexto: { b: param2 + ', Hola Usuario', a: param2 } })
});

let promesa3 = ({contexto: a ,b}) => new Promise((res, rej) => {
    res('Promesa 3')
});

Promise.resolve('Primer Valor') //Pirámide de la muerte, triángulo de la tortura, mala práctica
    .then(a => promesa1(a))
    .then(b => promesa2(b))
    .then(contexto => promesa3(contexto))*/
