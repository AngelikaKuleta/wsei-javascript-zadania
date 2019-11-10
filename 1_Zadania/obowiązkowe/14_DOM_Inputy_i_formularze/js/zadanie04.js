const creditCardNumber = document.getElementById("name");
const creditCardType = document.getElementById("type");

creditCardNumber.addEventListener("keyup", function() {
    if (this.value[0] == 4)
        creditCardType.textContent = "Visa";
    else if (this.value[0] == 5)
        creditCardType.textContent = "Mastercard";
    else if (this.value[0] == 3 && (this.value[1] == 4 || this.value[1] == 7))
        creditCardType.textContent = "American Express";
    else 
    creditCardType.textContent = "";

    if (creditCardType.textContent == "Visa" && this.value.length >= 13 && this.value.length <= 16)
        this.style.backgroundColor = "lightgreen";
    else if (creditCardType.textContent == "Mastercard" && this.value.length == 16)
        this.style.backgroundColor = "lightgreen";
    else if (creditCardType.textContent == "American Express5" && this.value.length == 15)
        this.style.backgroundColor = "lightgreen";
    else
        this.style.backgroundColor = "";
});