//zadanie 0
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

class Boat extends Vehicle {
    sail() {
        console.log("I'm sailing.")
    }
}

class Car extends Vehicle {
    constructor(type, engine) {
        super(type);
        this.engine = engine;
    }

    drive() {
        console.log("I'm driving.")
    }
}

class Plane extends Vehicle {
    constructor(type, engine) {
        super(type);
        this.engine = engine;
    }

    fly() {
        console.log("I'm flying.")
    }
}

//zadanie 1
class Kaczka {
    constructor(type) {
        this.type = type || "zwykła kaczka";
    }
    kwacz() {
        console.log("kwa kwa");
    }
    plywaj() {
        console.log("płynę...");
    }
    wyswietl() {
        console.log(`Wygląda jak ${this.type}`)
    }
    lec() {
        console.log("Lecę")
    }
}
let kaczucha = new Kaczka();
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();

//zadanie 2
class DzikaKaczka extends Kaczka {
    constructor() {
        super();
    }
}

let dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();

//zadanie 3
class KrzyzowkaKaczka extends Kaczka {
    constructor() {
        super("krzyżówka")
    }
}
let krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();

//zadanie 4
kaczucha.lec();
dzikaKaczucha.lec();
krzyzoKaczucha.lec();

//zadanie 5
class GumowaKaczka extends Kaczka {
    constructor() {
        super("gumowa");
    }
    lec() {
        console.log("gumowe kaczki nie potrafią latać :(")
    }
}

let gumowaKaczucha = new GumowaKaczka();
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();

require("./zadanie06.js");