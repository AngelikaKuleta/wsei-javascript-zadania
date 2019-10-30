/*
 <span class="tooltipText">Text tooltipa</span>
 */

addEventListener("DOMContentLoaded", () => {
    let tooltips = document.getElementsByClassName("tooltip");

    for (const el of tooltips) {
        el.addEventListener("mouseover", (e) => {
            el.innerHTML += '<span class="tooltipText">Text tooltipa</span>';
            // let span = document.createElement("span");
            // span.innerHTML = "Text tooltipa";
            // span.className = "tooltipText";
            // e.currentTarget.appendChild(span);
        });
        el.addEventListener("mouseout", (e) => {
            e.currentTarget.lastElementChild.remove();
        });
    }
});
    