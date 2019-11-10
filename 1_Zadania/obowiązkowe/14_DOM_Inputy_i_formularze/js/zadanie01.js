let invoiceData = document.getElementById("invoiceData");
invoiceData.style.display = "none";

document.getElementById("invoice").addEventListener("change", function() {
    if (this.checked)
        invoiceData.style.display = "block"
    else 
        invoiceData.style.display = "none"
})