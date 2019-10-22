//zadanie 0
let distFromAvarage = function(arr) {
    let outputArray = [];

    //w treści tego zadania nie było wymogu używania pętli for
    let avarage = arr.reduce((prev, curr) => prev + curr)/arr.length;
    arr.map((curr) => outputArray.push(curr-avarage)) 
    
    return outputArray;
}
console.log(distFromAvarage([1,2,3,4,5,6,7]));

//zadanie 1
let fruits = ["apples", "oranges", "strawberries", "bananas"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//zadanie 3
let printTable = function(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//zadanie 4
let multiply = function(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}
console.log(multiply([1,2,3,4,5,6,7]));

//zadanie 5
let getEvenAvarage = function(array) {
    let even_sum = 0;
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2==0) {
            even_sum = even_sum + array[i];
            counter++;
        }
    }
    return counter > 0 ? even_sum/counter : null;
}

console.log(getEvenAvarage([1,2,3,4,5,6,7]));
console.log(getEvenAvarage([1,1,1,1]));

//zadanie 6
let sortArray = function(arr) {
    return arr.sort((a, b) => a - b);
}

console.log(sortArray([145,11,3,64,4,6,10]));

//zadanie 7
let addArrays = function(arr1, arr2) {
    let outputArray = [];
    let counter;

    for (let i = 0; i < (arr1.length > arr2.length ? arr1.length : arr2.length); i++) {
        outputArray.push((arr1[i] || 0) + (arr2[i] || 0));
        console.log("dziala")
    }
    return outputArray;
}

console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));