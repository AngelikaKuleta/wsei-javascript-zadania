//zadanie 1
let articles = document.getElementsByTagName("article");

articles[0].getElementsByTagName("a")[0].addEventListener("click", (e) => {
    e.currentTarget.parentElement.getElementsByClassName("content")[0].style.display = "block";
})

articles[1].getElementsByTagName("a")[0].addEventListener("mouseover", (e) => {
    e.currentTarget.parentElement.getElementsByClassName("content")[0].style.display = "block";
})