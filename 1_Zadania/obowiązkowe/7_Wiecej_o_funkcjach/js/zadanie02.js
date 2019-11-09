function callOtherFunction(nameOfFunction) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b)
    console.log("Wynik", a + b)
})

callOtherFunction(function (a, b) {
    if (a < b)
        console.log(`Liczba ${a} jest mniejsza od liczby ${b}`);
    else if (a > b)
        console.log(`Liczba ${a} jest większa od liczby ${b}`);
    else 
        console.log(`Liczba ${a} i liczba ${b} są sobie równe`);
})

callOtherFunction(function (a, b) {
    console.log("Podstawa:", a);
    console.log("Potęga", b)
    console.log("Wynik", Math.pow(a, b))
})
