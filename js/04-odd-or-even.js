
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {             // modulus is evaluated before equality, so I shouldn't need parentheses, according to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators 
        console.log(`${i} is even.\n`);
    } else if (i % 2 == 1) {
        console.log(`${i} is odd.\n`);
    }
}