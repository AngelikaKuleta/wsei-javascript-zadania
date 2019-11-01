const checkboxs = document.querySelectorAll(".checkbox input[type='checkbox']");
const allToppingsCheckbox = checkboxs[0];
const clearCheckbox = checkboxs[checkboxs.length-1];
const toppingsCheckbox = document.querySelectorAll(".checkbox input[data-price]");
const price = document.getElementById("price");
const submitButton  = document.getElementsByClassName("btn-primary")[0];
const pageInfo = document.getElementsByClassName("page-info")[0];

allToppingsCheckbox.addEventListener("change", function() {
    if (this.checked) {
        toppingsCheckbox.forEach(el => el.checked = true);
        clearCheckbox.checked = false;
        price.textContent = count();
    }
});

clearCheckbox.addEventListener("change", function() {
    if (this.checked) {
        toppingsCheckbox.forEach(el => el.checked = false);
        allToppingsCheckbox.checked = false;
        price.textContent = count();
    }
});

for (let el of toppingsCheckbox) {
    el.addEventListener("change", function() {
        allToppingsCheckbox.checked = false;
        clearCheckbox.checked = false;  
        price.textContent = count();    
    });
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    pageInfo.textContent = "Do zapłaty: "+count();

})

function count() {
    pageInfo.textContent = "";
    return Array.from(document.querySelectorAll(".checkbox input[data-price]:checked"))
            .reduce((prev, curr) => 
                prev + parseFloat(curr.getAttribute('data-price')), 0).toFixed(2) + "zł";
}