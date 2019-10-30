addEventListener("DOMContentLoaded", () => {
    let elements = document.querySelectorAll("div > ul > li");
    console.log(elements);

    for (let el of elements) {
        el.addEventListener("mouseover", (e) => {
        if (e.currentTarget.children.length > 0)
            e.currentTarget.children[0].style.display = "block";

        });

        el.addEventListener("mouseout", (e) => {
            if (e.currentTarget.children.length > 0)
                e.currentTarget.children[0].style.display = "none";
        });
    }

})