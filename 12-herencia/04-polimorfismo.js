function Select() { }
Select.prototype.render = function () {
    console.log('renderizando Select');
}

function Checkbox() { }
Checkbox.prototype.render = function () {
    console.log('renderizando Checkbox');
}

let componentes = [
    new Select(),
    new Checkbox()
];

componentes.forEach(c => c.render());