/**
APIS:
Listar       GET
Crear        POST  
Actualizar   PUT/PATCH
Eliminar     DELETE
*/

const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url, {
    method: 'POST',
    body: JSON.stringify({ title: 'Hola Mundo' }),
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'api key',
    },
    cache: 'no-cache', //default, reload, force-cache, only-if-cache
})
    .then(response => {
        if (response.ok) {
            //return response.json();
            return response.text();
        }
        return Promise.reject(response.status);
    })
    .then(data => console.log(data))
    .catch(message => console.log({ message }));