//zadanie 0a
let [snow, , sun] = [ "snow", "rain", "sun" ];
console.log(snow, sun);

//zadanie 0b
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

let {type, autoStart} = slider;
console.log(type, autoStart);

//zadanie 1
let names = ["Piotr", "Radek", "Agnieszka"];
let [name1, name2, name3] = names;
console.log(name1, name2, name3);

//zadanie 2
let generateRandomNumbers = () => {
    let numbersArray = [];
    for (let i=0; i < 6; i++) {
        numbersArray.push(Math.floor(Math.random()*6));
    }
    return numbersArray;
}
let [num1, , num2] = generateRandomNumbers();
console.log(num1, num2);

//zadanie 4
let getAnimal = () => {
    return {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    }
}

let {name: catName, getVoice: catVoice} = getAnimal();
console.log(catName, catVoice());