let numberString1 = "";
let numberString2 = "";
let arithmetic = "";


function button1() {
    if (arithmetic === "") {
        numberString1 += "1";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "1";
        document.getElementById("output").value = numberString2;
    }

}

function button2() {
    if (arithmetic === "") {
        numberString1 += "2";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "2";
        document.getElementById("output").value = numberString2;
    }
}

function button3() {
    if (arithmetic === "") {
        numberString1 += "3";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "3";
        document.getElementById("output").value = numberString2;
    }
}

function button4() {
    if (arithmetic === "") {
        numberString1 += "4";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "4";
        document.getElementById("output").value = numberString2;
    }
}

function button5() {
    if (arithmetic === "") {
        numberString1 += "5";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "5";
        document.getElementById("output").value = numberString2;
    }
}

function button6() {
    if (arithmetic === "") {
        numberString1 += "6";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "6";
        document.getElementById("output").value = numberString2;
    }
}

function button7() {
    if (arithmetic === "") {
        numberString1 += "7";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "7";
        document.getElementById("output").value = numberString2;
    }
}

function button8() {
    if (arithmetic === "") {
        numberString1 += "8";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "8";
        document.getElementById("output").value = numberString2;
    }
}

function button9() {
    if (arithmetic === "") {
        numberString1 += "9";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "9";
        document.getElementById("output").value = numberString2;
    }
}

function button0() {
    if (arithmetic === "") {
        numberString1 += "0";
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 += "0";
        document.getElementById("output").value = numberString2;
    }
}

function buttonAC() {
    numberString1 = "";
    arithmetic = "";
    numberString2 = "";
    document.getElementById("output").value = "";
}

function buttonadd() {
    document.getElementById("output").value = "";
    arithmetic = "+";
}

function buttonsubtract() {
    document.getElementById("output").value = "";
    arithmetic = "-";
}

function buttonmultiply() {
    document.getElementById("output").value = "";
    arithmetic = "*";
}

function buttondivide() {
    document.getElementById("output").value = "";
    arithmetic = "/";
}

function calculate() {
    let finalAnswer = 0;
    if (arithmetic === "+") {
        finalAnswer = Number(numberString1) + Number(numberString2);
        document.getElementById("output").value = finalAnswer;
    }
    if (arithmetic === "-") {
        finalAnswer = Number(numberString1) - Number(numberString2);
        document.getElementById("output").value = finalAnswer;
    }
    if (arithmetic === "/") {
        finalAnswer = Number(numberString1) / Number(numberString2);
        document.getElementById("output").value = finalAnswer;
    }
    if (arithmetic === "*") {
        finalAnswer = Number(numberString1) * Number(numberString2);
        document.getElementById("output").value = finalAnswer;
    }

    numberString1 = "";
    numberString2 = "";
    arithmetic = 0;

    if (finalAnswer === !0) {
        numberString1 = finalAnswer;
    }

}

function buttonpercent() {
    if (arithmetic === "") {
        numberString1 = Number(numberString1) * 0.01
        document.getElementById("output").value = numberString1;
    }
}

function buttonplusminus() {
    if (arithmetic === "") {
        numberString1 = numberString1 * -1;
        document.getElementById("output").value = numberString1;
    }
    if (arithmetic) {
        numberString2 = numberString2 * -1;
        document.getElementById("output").value = numberString2;
    }
}

function buttondecimal() {
    if (!numberString1.includes('.')) {
        if (arithmetic === "") {
            numberString1 = document.getElementById("output").value;
            numberString1 += ".";
            document.getElementById("output").value = numberString1;
        }
    }

    if (!numberString2.includes('.')) {
        if (arithmetic) {
            numberString2 = document.getElementById("output").value;
            numberString2 += ".";
            document.getElementById("output").value = numberString2;
        }
    }
}