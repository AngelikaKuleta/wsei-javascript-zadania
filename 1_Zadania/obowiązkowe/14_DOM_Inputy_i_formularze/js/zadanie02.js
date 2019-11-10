const formControl =  document.getElementsByClassName("form-control")[0];
const images = document.querySelectorAll(".page-header img");
const systems = { 
    "Windows" : "Windows",
    "Os X" : "Apple",
    "Ubuntu" : "Ubuntu"
}

for (el of images) {
    if (el.alt == formControl.getElementsByTagName("option")[0].textContent)
        el.style.display = "block";
    else
        el.style.display = "none";
}

formControl.addEventListener("change", function(){
    for (el of images) {
        if (el.alt == systems[this.value])
            el.style.display = "block";
        else
            el.style.display = "none";
    }
})