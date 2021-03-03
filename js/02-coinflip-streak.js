let coinFlip;

do {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        console.log("Heads\n");
    } else if (coinFlip == 1) {
        console.log("Tails\n");
    }
} while (coinFlip == 0);