Array.from(document.getElementsByClassName("listContainer")).forEach(el => {
    el.addEventListener("mouseover", function() {       
        let list = this.getElementsByTagName("ul")[0];
        Array.from(list.children).forEach((el, index, arr) => {
            if (index == 0)
                el.style.backgroundColor = "red";
            else if (index == arr.length-1)
                el.style.backgroundColor = "blue";
            else    
                el.style.backgroundColor = "green"
        })
    })
});