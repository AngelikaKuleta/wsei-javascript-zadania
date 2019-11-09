var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) { //dodano this
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname); //dodano spację
    name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed"); //dodano spację
};

Robot.prototype.break = function () {
    this.isFunctional = false;
    console.log("Robot " + this.name + " was broken");
}

var robo = new Robot("Robo");
robo.sayHi("me");
robo.changeName("RoboCop");
robo.break();
robo.fixIt();