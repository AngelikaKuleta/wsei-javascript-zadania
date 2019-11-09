document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("resize", function() {
        document.getElementById("windowWidth").innerText = this.innerWidth;
        document.getElementById("windowHeight").innerHTML = this.innerHeight;
    })
});