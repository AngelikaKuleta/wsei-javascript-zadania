//zadanie 0
var car = {
    brand : "Mercedes",
    color: "czarny",
    numberOfKilometers : 0,
    printCarinfo: function() {
        console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers} km`)
    },
    drive: function(distance) {
        this.numberOfKilometers =+ distance;
    }
};
car.printCarinfo();
car.drive(20);
car.printCarinfo();

//zadanie 1
car.services = ["12-06-2018", "07-06-2019"];
car.addService = function(date) {
    this.services.push(date)
}
car.getServices = function() {
    console.log(this.services);
}

car.addService("05-11-2019");
car.getServices();

//zadanie 3
var stairs = {
    step: 0,    
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    printStep: function() {
        console.log(this.step);
    }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();