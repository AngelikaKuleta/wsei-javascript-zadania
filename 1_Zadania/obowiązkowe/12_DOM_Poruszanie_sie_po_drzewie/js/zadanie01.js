Array.from(document.getElementsByClassName("button")).forEach(el => {
    el.addEventListener("click", function() {
        let next = this.nextElementSibling
        if (next)
            next.style.display = (next.style.display == "block" || !next.style.display) ? "none" : "block";
    })
});