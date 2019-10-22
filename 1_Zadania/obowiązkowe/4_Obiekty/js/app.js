//zadanie 0a
var city = {
    capital: "Warszawa",
    population: 1760000,
    president: "Duda",
    primeMinisters: ["minister1,", "minister2"]
}

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

//zadanie 0b
var timeMachine = {};

timeMachine.shape = "rectangle";
timeMachine.model = "lux";
timeMachine.run = function(date, place) {
    this.date = date;
    this.place = place;

    console.log(this.shape);
    console.log(this.model);
    console.log(this.date);
    console.log(this.place);

}
timeMachine.run("01/01/1900", "Kair");

//zadanie 1
var book = {
    title: "Les Faux-monneyeurs",
    author: "Andre Gide",
    numberOfPages: 460
}
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

//zadanie 2
var person = {
    name: "John",
    age: 22,
    sayHello: function() {
        console.log("hello");
    }
}
console.log(person.name);
console.log(person.age);
person.sayHello();

//zadanie 3
var recipe = {
    title: "Carrot cake",
    servings: 4,
}
recipe.ingredients = ["carrots", "flour", "sugar"];
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

//zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(fork.isExist);
