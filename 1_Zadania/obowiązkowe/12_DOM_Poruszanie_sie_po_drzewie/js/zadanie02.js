Array.from(document.getElementsByClassName("button")).forEach(el => {
    el.addEventListener("click", function() {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        if (this.parentElement)
            this.parentElement.style.backgroundColor = randomColor;
    })
});
