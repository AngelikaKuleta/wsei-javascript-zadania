document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //zadanie 0
    const title = document.getElementsByClassName("title")[0];

    let getDataAnimation = (element) => {
        let dataAnimationValue = element.getAttribute("data-animation");
        return dataAnimationValue;
    }
    console.log(getDataAnimation(title));

    //zadanie 1
    const home = document.getElementById("home");
    //const home = document.querySelector("#home");
    const firsLiWithDataDirectionAttr = document.querySelector("li[data-direction]")
    const firstBlock = document.getElementsByClassName("title")[0];
    console.log(home);
    console.log(firsLiWithDataDirectionAttr);
    console.log(firstBlock);

    //zadanie 2
    let navList = document.getElementsByTagName("nav")[0].getElementsByTagName("li");
    let paragraphs = document.querySelectorAll("div p");
    let articleBlocks = document.querySelectorAll("article div");
    console.log(navList.length);
    console.log(paragraphs.length);
    console.log(articleBlocks.length);

    //zadanie 3
    const firstArticle = document.querySelector("article.first");
    console.log(firstArticle.getElementsByTagName("h1").length);

});
