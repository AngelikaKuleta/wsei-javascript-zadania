// Na stronie znajduje się tabela z wynikami w lokalnych mistrzostwach piłkarskich. Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach. Napisz kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:

// Obie drużyny muszą być różne.
// Liczba goli powinna być nieujemna.
// Jeżeli formularz zostanie zweryfikowany poprawnie, odpowiednia informacja o wyniku spotkania powinna pojawić się w tabeli jako kolejny wiersz.

const table = document.getElementsByTagName("tbody")[0];
const team1 = document.getElementById("team1");
const points1 = document.getElementById("points1");
const team2 = document.getElementById("team2");
const points2 = document.getElementById("points2");

document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
    e.preventDefault();

    if (parseInt(points1.value) >= 0 && parseInt(points2.value) >= 0 && team1.value != team2.value) {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${team1.value}</td>
        <td>${team2.value}</td>
        <td>${points1.value} - ${points2.value}</td>`;
        table.appendChild(newRow);

        //clear
        team1.value = "";
        points1.value = "";
        team2.value = "";
        points2.value = "";
    }
    else {
        alert("Wprowadzono niepoprawne dane")
    }
    
})