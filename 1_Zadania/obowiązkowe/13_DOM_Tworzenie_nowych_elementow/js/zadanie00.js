Array.from(document.getElementsByClassName("deleteBtn"))
    .forEach(el => {
        el.addEventListener("click", function() {
            this.parentElement.parentElement.remove();
        })
    })