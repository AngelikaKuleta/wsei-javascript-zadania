//zadanie 0
let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", "Puszek", ...namesA,"Jan", "Karol" ];
console.log(namesB);

let getAverage = (...args) => {
    return args.reduce((prev, curr) => prev + curr)/args.length
} 
console.log(getAverage(2,4,5,6,7,79));

//zadanie 1
const name = "Angelika";
const nameArray = [...name];
console.log(nameArray);

//zadanie 2
let fruits = ["apple", "orange", "strawbery"];
let vegetables = ["tomato", "cucumber"];
let mix = [...fruits, ...vegetables];
console.log(mix);

//zadanie 3
import {people} from "./zadanie03.js";

let setFunnyName = (...args) => {
    people.push(...args)
}
setFunnyName({person: "Nao Buu", profession: "tynkarz"}, {person: "Jan Nowak", profession: "bezrobotny"})
console.log(people);