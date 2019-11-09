/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//tworzymy funkcję jeden()
function jeden() {

    //wewnątrz funkcji jeden tworzymy zmienną zmienna1 o zasięgu funkcyjnym
    var zmienna1 = 1;

    //tworzymy funkcję dwa() zagnieżdżoną w funkcji jeden()
    function dwa() {

        //zmienna1 zdeklarowana bezpośrednio w funkcji jeden() widoczna jest wszędzie wewnatrz tej funkcji, również w funkcjach zagnieżdżonych
        console.log(zmienna1);

        //tworzymy zmienną zmienna2 która jest widoczna tylko wewnątrz funkcji dwa()
        var zmienna2 = 3;
    }

    //wywołujemy zdefiniowaną wcześniej funkcję dwa(), która ma dostęp do zmiennej 1
    dwa();

    //zmienna2 nie jest widoczna na zewnatrz funkcji dwa()
    console.log(zmienna2)
}

//wywołujemy funkcję jeden(), która wywołuję funkcję dwa() i próbuje wypisać zmienną zmienna2
jeden()