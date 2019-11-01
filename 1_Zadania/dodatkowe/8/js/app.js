//zadanie 1
function Tree(type) {
    this.type = type;

    this.bloom = function() {
        console.log("I am blooming")
    }
}

const tree1 = new Tree("sosna");
const tree2 = new Tree("wierzba");
const tree3 = new Tree("buk");

