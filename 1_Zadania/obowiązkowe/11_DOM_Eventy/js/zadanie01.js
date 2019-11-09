document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

//po przeniesieniu tagu script do sekcji head zainicjalizowane zmienne sa puste, gdyż nastąpiła próba pobrania elementów ze strony przed jej załadowaniem

//powyższy problem rozwiązuje stworzenie eventu DOMContentLoaded dla elementu document

//po ponownym przeniesienu tagu script na koniec pliku nie następuje żadna zmiana w działaniu skrypu