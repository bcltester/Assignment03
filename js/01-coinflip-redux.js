let coinFlip;

let times = parseInt(prompt("How many times?"));

for (let i = 0; i < times; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        console.log("Heads\n");
    } else if (coinFlip == 1) {
        console.log("Tails\n");
    }
}
