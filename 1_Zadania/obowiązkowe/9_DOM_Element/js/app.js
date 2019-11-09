document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //zadanie 0
    let getDatasInfo = (elements) => {
        let datas = [];
        for (el of elements) {
            //tworzy tablicę wartości przypisanych do wszystkich atrybutów data-* danego elementu
            datas.push(Object.values({...el.dataset}));
        }
        return datas;
    }
    console.log(getDatasInfo(document.getElementsByTagName("li")));

    //zadanie 1
    console.log(homeElement);
    console.log(homeElement.tagName, homeElement.className)
    console.log(childElements);
    Array.from(childElements).forEach((el) => {
        console.log(el);
        console.log(el.tagName, el.className)
    })
    console.log(banner);
    console.log(blocks);
    Array.from(blocks).forEach((el) => {
        console.log(el);
        console.log(el.tagName, el.className)
    })
    console.log(links);
    Array.from(links).forEach((el) => {
        console.log(el);
        console.log(el.tagName, el.className)
    })

    //zadanie 2
    Array.from(blocks).forEach((el) => {
        //wyświetla zawartość danego elementu
        console.log(el.innerHTML);
        //wyświetla zawartość danego elementu oraz sam element
        console.log(el.outerHTML);
        el.innerHTML = "Nowa wartość diva o klasie blocks";
        console.log(el.innerHTML);
        console.log(el.outerHTML);

    })

    //zadanie 3
    const mainFooter = document.getElementById("mainFooter");
    let getId = (element) => {
        return element.id;
    }
    console.log(getId(mainFooter));

    //zadanie 4
    let getTags = (elements) => {
        let arr = [];
        for (el of elements) {
            arr.push(el.tagName);
        }
        return arr;
    }
    console.log(getTags(childElements));

    //zadanie 5
    let getClassInfo = (element) => {
        return [...element.classList];
    }
    console.log(getClassInfo(banner))

    //zadanie 6
    let navList = document.getElementsByTagName("nav")[0].getElementsByTagName("li");
    console.log(getDatasInfo(navList));
    let setDataDirection = (elements) => {
        for (el of elements) {
            el.dataset.direction ? null : el.dataset.direction = "top";
        }
    }
    setDataDirection(navList);
    console.log(getDatasInfo(navList));
});
