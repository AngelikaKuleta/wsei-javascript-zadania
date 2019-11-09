document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByTagName("div")[0].addEventListener("mousemove", (e) => {
        let globalX = document.getElementById("globalX");
        let globalY = document.getElementById("globalY");
        let localX = document.getElementById("localX");
        let localY = document.getElementById("localY");
        globalX.innerHTML = e.clientX;
        globalY.innerHTML = e.clientY;
        localX.innerHTML = e.offsetX
        localY.innerHTML = e.offsetY
    })
});