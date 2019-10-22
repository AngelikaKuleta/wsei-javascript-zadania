addEventListener("DOMContentLoaded", () => {
    console.log("Działa");

    let prev = document.getElementById("prevPicture");
    let next = document.getElementById("nextPicture");
    visible_el = 0;

    let pictures = document.querySelectorAll(".slider li");
    console.log(pictures)

    pictures[visible_el].className = "visible";

    prev.addEventListener("click", (e) => {
        console.log("prev");
        pictures[visible_el].classList.toggle("visible");
        visible_el <= 0 ? visible_el = pictures.length-1 : visible_el--;
        pictures[visible_el].classList.toggle("visible");
    });

    next.addEventListener("click", (e) => {
        console.log("next");
        pictures[visible_el].classList.toggle("visible");
        visible_el >= pictures.length-1 ? visible_el = 0 : visible_el++;    
        pictures[visible_el].classList.toggle("visible");
    });

});