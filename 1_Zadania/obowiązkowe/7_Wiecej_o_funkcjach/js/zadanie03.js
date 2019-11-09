hello(); //hoisting
function hello() {
    console.log("Cześć");
}
hello();

welcome(); //type error spowodowany tym, że hoisting działa dla samej deklaracji zmiennej, do której w momencie wywoływania nie została jeszcze przypisana definicja funkcji
var welcome = function() {
    console.log("Witaj");
}
welcome();