class Singleton {

    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        this.randomNumber = Math.random();
        if (Singleton.instance) {
            console.log('Singleton instance already exists');
            return Singleton.instance;
        }
        console.log("don't have instance and create it");
        Singleton.instance = this;
    }
}

/*const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();
console.log(singleton.randomNumber);
console.log(singleton2.randomNumber);
console.log(singleton3.randomNumber);
console.log(singleton === singleton2);
console.log(singleton2 === singleton3);*/

class WeekDays {
    daysEs = [
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'Domingo'
    ];
    daysEn = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    constructor(lang) {
        this.lang = lang;
        if (WeekDays.instance) {
            //WeekDays instance already exists'
            return WeekDays.instance;
        }
        //don't have instance and create it
        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === 'es' ?
            this.daysEs :
            this.daysEn;
    }
}

const weekDays = new WeekDays('es');
const weekDays2 = new WeekDays('en');
console.log(weekDays.getDays());
console.log(weekDays2.getDays());