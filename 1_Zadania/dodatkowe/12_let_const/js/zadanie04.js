
//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
//name = "Klaudia"; //błąd - TypeError
//raz przypisana wartość do zmiennej utworzonej przy pomocy const nie może zostać zmieniona


//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1, 2, 3, 4];
//simpleArray = [5, 6, 7]; //błąd - TypeError 
//tablica jest typem referencyjnym, co oznacza że zmienna simpleArray przechowuje adres wskazujący na miejsce, w pamięci, w którym znajduje się dany obiekt, przypisanie nowej tablicy do zmiennej oznacza zamianę tego adresu, co jest niedozwolone w przypadku const
simpleArray.push(5); //ok
//w tym przypadku modyfikacja obiektu nie powoduje zmiany adresu a jedynie zwiększa zajmowaną przestrzeń, co przy zmiennych deklarowanych przez const jest dozwolone
simpleArray[0] = 0; //ok
//modyfikacja elementów tablicy również nie powoduje zmiany adresu

//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
}

//dog = { name: "Reksio" }; //błąd - TypeError
dog.skill = "kissing"; //ok
dog.age = 2; //ok
//obiekt jest również typem referencyjnym, występuję tutaj takie same reguły jak w przypadku wyżej opisanej tablicy