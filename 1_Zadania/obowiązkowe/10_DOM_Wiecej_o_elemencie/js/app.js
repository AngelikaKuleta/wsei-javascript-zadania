document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //zadanie 0
    let ex5ListElements = document.querySelectorAll("div.ex5 li");
    for (let i = 1; i <= ex5ListElements.length; i++) {
        if (i%2 == 0)
            ex5ListElements[i-1].style.backgroundColor = "green";
        
        if (i%3 == 0) 
            ex5ListElements[i-1].style.textDecoration = "underline";    
    }
    ex5ListElements[4].classList.add("big");

    //zadanie 1
    const ex1Div = document.getElementsByClassName("ex1")[0];
    
    let chrome = ex1Div.getElementsByClassName("chrome")[0];
    chrome.style.width = "100px";
    chrome.parentElement.getElementsByTagName("a")[0].innerHTML = "Chrome";
    
    let edge = ex1Div.getElementsByClassName("edge")[0];
    edge.style.backgroundImage = 'url("assets/img/edge.png")';
    edge.parentElement.getElementsByTagName("a")[0].href = "https://www.microsoft.com/pl-pl/windows/microsoft-edge";
    
    let firefox = ex1Div.getElementsByClassName("firefox")[0];
    firefox.style.backgroundImage = 'url("assets/img/firefox.png")';
    firefox.parentElement.getElementsByTagName("a")[0].href = "https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com";
    firefox.parentElement.getElementsByTagName("a")[0].innerHTML = "Firefox";

    //style dodawane są inline w kodzie HTML dzięki czemu mają wyższy priorytet i nadpisują style zapisane w arkuszu stylów

    //zadanie 2
    let name = document.getElementById("name");
    let favColor = document.getElementById("fav_color");
    let favMeal = document.getElementById("fav_meal");
    name.innerHTML = "Angelika";
    favColor.innerHTML = "dark blue";
    favMeal.innerHTML = "letcho"

    //zadanie 3
    let ex3List = document.querySelector(".ex3 ul");
    ex3List.classList.add("menu");
    Array.from(ex3List.getElementsByTagName("li")).forEach(el => {
        el.classList.add("menuElement");
        el.classList.remove("error");
    });

    //zadanie 4
    document.querySelectorAll(".ex4 li").forEach((el, index) => {
        el.dataset.id = index+1;
        console.log(el);
    })
});