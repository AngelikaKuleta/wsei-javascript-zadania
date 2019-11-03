//I. Sprawdź najpierw zasięg let
let numbers = [2, 3, 4];
{
    //A1 - wypisuję zmienną numbers przed deklaracją
    //Wynik w konsoli to TODO: błąd - ReferenceError
    //Dlaczego taki wynik? TODO: zbyt wczesne odwołanie się do zdeklarowanej zmiennej (TDZ)
    console.log(numbers);

    //A2 - wypisuję zmienną numbers po deklaracji
    //Wynik w konsoli to TODO: [2, 3, 4]
    //Dlaczego taki wynik? TODO: zmienna została wcześniej zdeklarowana, dlatego jest widoczna
    console.log(numbers);
}

//A3 - wypisuję zmienną numbers za blokiem
//Wynik w konsoli to TODO: błąd - ReferenceError
//Dlaczego taki wynik? TODO: let ma zakres lokalny wewnątrz bloku, zmienna nie będzie więc widoczna poza blokiem, w którym została zdeklarowana
console.log(numbers);



//II. Sprawdź teraz  zasięg const
const PI = 3.14;
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: błąd - ReferenceError
    //Dlaczego taki wynik? TODO: to samo co w przypadku let
    console.log(PI);

    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: to samo co w przypadku let
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: błąd - ReferenceError
//Dlaczego taki wynik? TODO: to samo co w przypadku let
console.log(PI);
