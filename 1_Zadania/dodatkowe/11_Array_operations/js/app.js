document.addEventListener('DOMContentLoaded', function () {
    var numbers = [5, 10, 12, 20, 100];
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    })
    console.log(result);

    //zadanie 0
    var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
    console.log(cities.map(el => el.length));

    //zadanie 1
    let randomize = function (param1, param2, callback) {
        return typeof(callback) == "function" ? callback(param1, param2) : null;
    }

    let random = function (num1, num2) {
        return Math.floor((Math.random() * num2) + num1);
    }

    console.log(randomize(1, 10, random));

    //zadanie 2
    var animals = ["cat", "shrimp", "giraffe"];
    animals.forEach(el => console.log(el));

    //zadanie 3
    var years = [1995, 1856, 2014, 1987];
    let age = years.map(el => new Date().getFullYear() - el);
    console.log(age);

    //zadanie 4
    var numbers = [1, 2, 3, 4, 5];
    let sum = numbers.reduce((prev, curr) => prev + curr);
    let product = numbers.reduce((prev, curr) => prev * curr);
    console.log(`sum of ${numbers} equals ${sum}`);
    console.log(`product of ${numbers} equals ${product}`);
});