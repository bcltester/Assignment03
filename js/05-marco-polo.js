for (i = 1; i <= 100; i++) {
    let strMsg = "";
    if (i % 3 == 0) {
        strMsg += "Marco! ";
    }
    if (i % 5 == 0) {
        strMsg += "Polo!";
    }
    if (strMsg == "") {
        strMsg = i;
    }
    strMsg += "\n";
    console.log(strMsg);
}
