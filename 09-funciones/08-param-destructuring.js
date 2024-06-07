/*function webserver(config) {
    const url = config.url;
    return url;
}

console.log(webserver(({ url: 'https://holamundo.io' })));

////
function webserver(config) {
    const { url } = config;
    return url;
}

console.log(webserver(({ url: 'https://holamundo.ioo' })));

////
function webserver({ url }) {
    return url;
}

console.log(webserver(({ url: 'https://holamundo.iooo' })));

//// 
const config = {
    url: 'https://holamundo.ioooo',
    direccion: {
        calle: 'falsa',
        numero: 123,
    }
}
console.log(config)

function webserver({ url, direccion: { calle } }) {
    console.log(calle)
    return url;
}
console.log(webserver(config));

//// */
const configuracion = [
    'https://holamundo.ioooo',
    145,
    8080
]

function webserver([url, ...rest]) {
    console.log(rest)
    return url;
}
console.log(webserver(configuracion));

////

const config = {
    url: 'https://holamundo.ioooo',
    direccion: {
        calle: 'falsa',
        numero: 123,
    }
} 

function webserver(config) {
    const {url, ...rest} = config;
    console.log(rest);
    return url;
}
console.log(webserver(config));