document.addEventListener("DOMContentLoaded", function () {
    Array.from(document.getElementsByTagName("button")).forEach(el => {
        el.addEventListener("click", () => {
           let counter = document.getElementsByClassName("counter")[0];
           counter.innerHTML = parseInt(counter.innerHTML)+1;
        });
    });
});