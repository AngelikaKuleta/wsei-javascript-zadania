addEventListener("DOMContentLoaded", () => {
    console.log("Działa");

    let pictures = document.querySelectorAll(".gallery img");   
    let body = document.body;

    console.log(pictures);
    console.log(body);

    for (const p of pictures) {
        p.addEventListener("click", function() {
            console.log(this.src);

            //"Zauważ, że na górze pliku app.js jest zakomentowany kawałek kodu HTML"
            //z racji, że lik app.js nie zawierał kawałka kodu HTML, dopisuję własną wersję
            let div = document.createElement("div");
            let close = document.createElement("button");
            let img = document.createElement("img");
            div.classList.add("fullScreen");
            close.classList.add("close");
            close.innerText = "close";
            close.addEventListener("click", () => body.removeChild(div));
            img.src = this.src;
            div.appendChild(close);
            div.appendChild(img);
            body.appendChild(div);
        });
    }
});