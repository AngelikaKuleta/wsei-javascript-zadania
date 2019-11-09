document.addEventListener("DOMContentLoaded", function () {  
    //tworzony jest jeden event
    document.body.addEventListener("click", (e) => {
        changeColor.bind(e.target)();
    })

    //funkcja wykorzystujaca this
    function changeColor() {
        if (this.tagName === "DIV") {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        }   
    }
});