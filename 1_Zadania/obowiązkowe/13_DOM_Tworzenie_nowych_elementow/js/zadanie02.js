const table = document.getElementById("orders");
const orderId = document.getElementById("orderId");
const item = document.getElementById("item");
const quantity = document.getElementById("quantity");

document.getElementById("addBtn").addEventListener("click", function() {
    let row = document.createElement("tr");
    row.innerHTML = `<td>
    ${orderId.value}
</td>
<td>
    ${item.value}
</td>
<td>
    ${quantity.value}
</td>`;
    table.appendChild(row);
    
    //clear
    orderId.value = "";
    item.value = "";
    quantity.value = "";
})