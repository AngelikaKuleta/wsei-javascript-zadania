//zadanie 1
let hello = () => console.log("Hello World");
hello();

//zadanie 2
let product = (number = 1) => number*2;
console.log(product());
console.log(product(2));

//zadanie 3
let giveLarger = (num1, num2) => {
    return num1 < num2 ? num2 : num1
};
console.log(giveLarger(10, 20));

//zadanie 4
var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
let getSecondMaxNumber = (array) => {
    return [...array].sort((a, b) => b-a)[1];
}
console.log(getSecondMaxNumber(arr1));

//zadanie 5
console.log((param => param)("hello"));

//zadanie 6
let count = (num = 1) => {
    let i = 1;
    const stop = (num > 10 ? 10 : num);
    const time = setInterval(() => {
        console.log(`Hello ${i}`)
        i++;

        if (i > stop) clearInterval(time);

    }, 1000);
}
count();

require("./zadanie00");
require("./zadanie07");
require("./zadanie08");
require("./zadanie09");