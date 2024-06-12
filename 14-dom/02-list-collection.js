//COLLECTION
let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

let item1 = collection.namedItem('Mora'); //paso el name de la etiqueta
let item2 = collection.item(3); //se pasa el indice
let item3 = collection[3];

//iterar los elementos de collection
for (let el of collection) {
    console.log(el)
}

Array.from(collection).forEach(x => console.log(x)); //con esto muestra el objeto

[...collection].forEach(x => console.log(x)); //con esto muestra el elemento mismo

//NODELIST
let iteml1 = list.item(3)      
let iteml2 = list.item(3)      

list.forEach(x => console.log(x));

let entrie = list.entries(); //devuelve array iterator
let key = list.keys();
let value = list.values();

[...collection].forEach(x => console.log(x));



