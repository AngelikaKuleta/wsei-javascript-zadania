function Calculator() {
    this.history = [];
}
Calculator.prototype.add = function(num1, num2) {
    let result = num1 + num2;
    this.history.push(`added ${num1} to ${num2} got ${result}`)
    return result;
}
Calculator.prototype.multiply = function(num1, num2) {
    let result = num1 * num2;
    this.history.push(`multiplied ${num1} with ${num2} got ${result}`)
    return result;
}
Calculator.prototype.subtract = function(num1, num2) {
    let result = num1 - num2;
    this.history.push(`subtracted ${num1} from ${num2} got ${result}`)
    return result;
}
Calculator.prototype.divide = function(num1, num2) {
    let result = num1 / num2;
    this.history.push(`divided ${num1} by ${num2} got ${result}`)
    return result;
}
Calculator.prototype.printOperations = function() {
    console.log(this.history);
}
Calculator.prototype.clearoperations = function() {
    this.history.splice(0,this.history.length);
}

calc = new Calculator();
console.log(calc.add(10, 4));
console.log(calc.multiply(10, 4));
console.log(calc.subtract(10, 4));
console.log(calc.divide(10, 4));
calc.printOperations();
calc.clearoperations();
calc.printOperations();
