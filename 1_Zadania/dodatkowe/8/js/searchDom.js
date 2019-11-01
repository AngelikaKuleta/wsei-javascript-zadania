//zadanie 2
const menu = document.getElementById("menu");

let getDataInfo = (element) => {
    let liArray = element.getElementsByTagName("li");
    return Array.from(liArray).map(el => el.getAttribute("data-info"));
}
console.log(getDataInfo(menu));

const mainContener = document.getElementById("main-contener");

let getElementClass = (element) => {
    return Array.from(element.classList);
}
console.log(getElementClass(mainContener));

const pinkColor = document.getElementsByClassName("pink-color");

let getElementText = (element) => {
    return element[0].textContent;
}
console.log(getElementText(pinkColor));

const images = document.getElementsByClassName("images");

let getElementAlt = (element) => {
    let altArray = Array.from(element).map(el => el.alt);
    return altArray;
}
console.log(getElementAlt(images));

const myLink = document.getElementsByClassName("my-link");

let getElementHref = (element) => {
    hrefArray = Array.from(element).map(el => el.href);
    return hrefArray;
}
console.log(getElementHref(myLink));