class Resto {
    #timetable;
    constructor(name) {
        this.name = name;
    }

    get timetable() {
        return this.#timetable;
    }
    set timetable(value) {
        let date = new Date(value);
        let time = date.getTime();
        if (Number.isNaN(time)){
            throw new Error('Fecha no válida');
        }
        this.#timetable = date;
    }
}

const r = new Resto('BBQ');

r.timetable = '1 march 1900';
