//zadanie 0a i 0b
Array.from(document.getElementsByClassName("parent")).forEach(el => {
    el.addEventListener("mouseover", (e) => {
        e.currentTarget.getElementsByClassName("children")[0].style.display = "block";
    })
    el.addEventListener("mouseleave", function() { 
        function hideChildrenElement(el){
            el.getElementsByClassName("children")[0].style.display = "none";
        }
        hideChildrenElement(this)
    });
});