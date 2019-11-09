Array.from(document.getElementsByClassName("moveBtn")).forEach(el => {
    el.addEventListener("click", function() {
        let list = this.parentElement.parentElement;
        if (list.id == "list1")
            document.getElementById("list2").appendChild(this.parentElement);
        else 
            document.getElementById("list1").appendChild(this.parentElement);
            
    })
})