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

//zadanie 2

//zadanie 3
var recipe = {
    title: "",
    servings: 0,

}
recipe.ingredients = ["a", "b", "c"];
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);