let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';

{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
    // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
    // Teraz jest: noc i Fiona to: ogrzyca, a jej ukochany to: Shrek
    // deklaracja zmiennych timeOfDay i character przy pomocy słowa kluczowego let sprawia, że tworzone są zmienne lokalne przysłaniające zmienne stworzone poza blokiem, zmienna lover utworzona przed blokiem nie jest przysłaniana więc jest również widoczna wewnatrz bloku
}
console.log(character)

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.
// Teraz jest: dzień i Fiona to: księżniczka, a jej ukochany to: Shrek
// założymy, że mieliśmy zaćmienie słońca, zaćmienie się skóńczyło więc słońce nie jest już przysłaniane przez księżyć, analogicznie dowołujemy się teraz do zmiennych poza blokiem, więc zdeklarowane wewnątrz niego zmienne lokalne o tych samych nazwach nie przysłaniają już zmiennych globalnych zdefiniowanych przed blokiem
