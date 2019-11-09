
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//definicja funkcji sortArray
function sortArray() {

    //tworzymy zmienną, do której przypisujemy tablicę liczb
    var points = [41, 3, 6, 1, 114, 54, 64];

    //za tablicy points wykonujemy predefiniowaną funkcję sort, która jako argument przyjmuje funkcję porównującą elementy
    points.sort(function (a, b) {
        //jeśli zwróci wartość mniejszą od 0, indeks elementu a będzie mniejszy niż indeks b, jeśli zwróci wartość większą o 0, indeks elementu a będzie większy niż indeks b
        //soruje elementy rosnąco
        return a - b;
    });

    //zwraca posortowaną tablicę
    return points;
}

//wyświetlamy w konsoli wynik funkcji sortArray()
console.log(sortArray());
