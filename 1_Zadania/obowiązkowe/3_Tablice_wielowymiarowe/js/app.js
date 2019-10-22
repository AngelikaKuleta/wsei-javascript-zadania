//zadanie 0
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

var checkArray = function(inpuArray) {
    var outputArray = [];
    for (let col = 0; col < inputArray.length; col++) {
        outputArray[col] = true;
        for (let row = 0; row < inputArray[col].length; row++) {
            if (inputArray[col] %2 !=0)
                putputArray[col] = false
        }
    }
    return outputArray;
}

//zadanie 1
console.log(task1Array[3][2]);
console.log(task1Array[2].length);
console.log(task1Array[4][2]);

//zadanie 2
for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i]);
}

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}


for (let i = 0; i < task2Array.length; i++) {  
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

//zadanie 3
var print2DArray = function(arr) {
    for (let i = 0; i < arr.length; i++) {  
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

//zadanie 4
var task4Array = [[1,2], [3,4]];
print2DArray(task4Array);

//zadanie 5
var create2DArray = function(rows, columns) {
    var outputArray = [];
    let number = 1;
    for (let i = 0; i < rows; i++) {  
        outputArray.push([]); //important
        for (let j = 0; j < columns; j++) {
            outputArray[i].push(number);
            number++;
        }
    }
    return outputArray;
}
console.log(create2DArray(4,4));