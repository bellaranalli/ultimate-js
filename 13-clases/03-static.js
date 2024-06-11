class Restaurants {
    static cantidad= 12;
    constructor(name) {
        this.name = name;
    }
    getTimetable(){
        console.log('horario resto');
    }
   static getRestaurant(id){ //son métodos que pertenecen a la clase y no a la instancia
        return new Restaurants('BBQ');
    }
}

const r = Restaurants.getRestaurant(12);

/*const arr = new Array();
Array.isArray();
Array.from();
Object.assign();*/
//también son métodos estáticos
