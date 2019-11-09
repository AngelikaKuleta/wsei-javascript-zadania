let answer1 = document.getElementsByClassName("first")[0].children[0].children[2];
let answer2 = document.getElementById("second").parentElement.children[3];
let childChildParentThird = document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.firstElementChild;
let answer3 = childChildParentThird.children[Math.floor(childChildParentThird.children.length/2)];
let answer4 = document.getElementsByClassName("forth")[0].parentElement.getElementsByTagName("article")[0].getElementsByTagName("p")[1];

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);