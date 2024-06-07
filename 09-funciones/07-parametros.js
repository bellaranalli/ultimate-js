//PORT = 8080;
//BUCKET = 145;

const config = {
    url: 'https://holamundo.io',
}

function configApi(url, bucket = 145, port = 8080) {
    return `${url}/${bucket}/${[port]}`;
}

//console.log(configApi());
console.log(configApi('https://holamundo.io'));