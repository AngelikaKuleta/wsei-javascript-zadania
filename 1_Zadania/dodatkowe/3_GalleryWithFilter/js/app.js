addEventListener("DOMContentLoaded", () => {
    console.log("Działa");

    let pictures = document.querySelectorAll("#gallery img");   
    let showButton = document.getElementById("showButton");
    let hideButton = document.getElementById("hideButton");
    let tagInput = document.getElementById("tagInput");

    console.log(pictures);
    console.log(showButton);
    console.log(hideButton);
    console.log(tagInput);

    showButton.addEventListener("click", () => {
        for (let i=0; i < pictures.length; i++) {
            let tags = pictures[i].getAttribute("data-tag");
            console.log(tags);
            if (tags.indexOf(tagInput.value) != -1)
                pictures[i].classList.remove("invisible")
            else
                pictures[i].classList.add("invisible")
        }
    });

    hideButton.addEventListener("click", () => {
        tagInput.value = "";
        for (let i=0; i < pictures.length; i++) {
            pictures[i].classList.remove("invisible")
        }
    });

});


// Zmień eventy w taki sposób, żeby dodatkowo wypisywały wszystkie tagi dla wszystkich obrazków (czyli musisz użyć pętli i datasetu).

// Punkt 6
// Zmień eventy w taki sposób, żeby wyświetlały tylko i wyłącznie tagi, w których znajduje się napis z inputu (uzyj do tego indexOf).

// Punkt 7
// Zmień eventy, w taki sposób, żeby zamiast wyświetlać tag dla obrazka (cały czas tylko dla tych, które mają odpowiedni tag), obrazek ten dostawał lub tracił (w zależności od guzika) klasę invisible.