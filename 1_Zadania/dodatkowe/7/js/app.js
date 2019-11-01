//zadanie 1
let getNumber = (num, arr) => {
    return arr.includes(num);
}
console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100])); 

//zadanie 2
let createIdentityMatrix = (rows, columns) => {
    let outputArray = [];
    for (let i = 0; i < rows; i++) {
        outputArray.push([]);
        for (let j = 0; j < columns; j++) {
            if (i == j)
                outputArray[i].push(1);
            else 
                outputArray[i].push(0);
        }
    }
    return outputArray;
}
console.log(createIdentityMatrix(4,4));

//zadanie 3
let sortPlanet = (planets) => {
    let outputArray = [...planets];
    outputArray.sort((a, b) => {
        return b.numberOfMoons - a.numberOfMoons
    });
    return outputArray;
}

//zadanie 1 - dodatkowe
let addTheSameNumbers = (num, arr) => {
    let sum = 0;
    for (el of arr) {
        if (el === num)
            sum += num;
    }
    return sum > 0 || num === 0 ? sum : null;
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

//zadanie 2 - dodatkowe
let factors = (num) => {
    let outputArray = [];
    for (let i = num; i >= 0; i--) {
        if (num%i == 0) {
            outputArray.push(i);
        } 
    }
    return outputArray;
}

console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));

//zadanie 3 - dodatkowe
let getMissingElement = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]+1)
            return arr[i-1]+1;
    }
    return null;
}

console.log(getMissingElement([1,2,3,4,5,6,7]));
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));

//zadanie 4 - dodatkowe
let getLastNumbers = (num, arr) => {
    let outputArray = [];
    if (arr && parseInt(num)) {
        for (let i = arr.length - num; i < arr.length; i++) {
            outputArray.push(arr[i]);
        }
    }
    return outputArray;
}

console.log(getLastNumbers(2, [1,2,3,4,5,6,7]));
console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15]));
console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4]));
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]));