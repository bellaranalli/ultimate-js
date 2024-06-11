function User() {
    this.name = 'Pomelo';
}

function Product() {
    this.name = 'Fruta';
} 

function Entidad(){}
Entidad.prototype.save = function(){
    console.log('guardando', this.name);
}
Entidad.prototype.validate = function(){
    console.log('validando', this.name);
}

//User.prototype = Entidad.prototype;
//User.prototype.constructor = User;
//User.prototype = Object.create(Entidad.prototype) //se conservan los constructores extendiendo prototipos, de todas maneras es una forma antigua
//User.prototype.constructor = User;

Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();
const product = new Product();
console.log(user, product);





