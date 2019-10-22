let countHello = function(n) {
    let counter = 1;
    let interval = setInterval(() => {
        if (counter <= n) {
            console.log("Hello", counter);
            counter++;
        }
        else clearInterval(interval);
    }, 1000
    );
}
countHello(5);