let userInput = document.getElementById("input");
userInput.value = ""

let doubleZero = document.getElementById("doubleZeroBtn");
doubleZero.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = ""
        userInput.value += "00"
    } else {
        userInput.value += "00"
    }
}

let point = document.getElementById("pointBtn");
point.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += ".";
    } else {
        userInput.value += ".";
    }
}

let zero = document.getElementById("zeroBtn");
zero.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 0;
    } else {
        userInput.value += 0;
    }
}

let one = document.getElementById("oneBtn");
one.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 1;
    } else {
        userInput.value += 1;
    }

}

let two = document.getElementById("twoBtn");
two.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 2;
    } else {
        userInput.value += 2;
    }
}

let three = document.getElementById("threeBtn");
three.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 3;
    } else {
        userInput.value += 3;
    }
}

let four = document.getElementById("fourBtn");
four.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 4;
    } else {
        userInput.value += 4;
    }
}

let five = document.getElementById("fiveBtn");
five.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 5;
    } else {
        userInput.value += 5;
    }
}

let six = document.getElementById("sixBtn");
six.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 6;
    } else {
        userInput.value += 6;
    }
}

let seven = document.getElementById("sevenBtn");
seven.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 7;
    } else {
        userInput.value += 7;
    }
}

let eight = document.getElementById("eightBtn");
eight.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 8;
    } else {
        userInput.value += 8;
    }
}

let nine = document.getElementById("nineBtn");
nine.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += 9;
    } else {
        userInput.value += 9;
    }
}

let ac = document.getElementById("allClearBtn");
ac.onclick = function() {
    userInput.value = "";
}

let del = document.getElementById("deleteBtn");
del.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = ""
    } else {
        let input = (userInput.value);
        let prev = input.length;
        userInput.value = input.substring(0, prev - 1);
    }
}

let add = document.getElementById("addBtn");
add.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += "+";
    } else {
        userInput.value += "+";
    }
}

let minus = document.getElementById("minusBtn");
minus.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += "-";
    } else {
        userInput.value += "-";
    }
}

let multiply = document.getElementById("mulBtn");
multiply.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += "*";
    } else {
        userInput.value += "*";
    }
}

let divide = document.getElementById("divideBtn");
divide.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += "/";
    } else {
        userInput.value += "/";
    }
}

let modulo = document.getElementById("moduloBtn");
modulo.onclick = function() {
    if (userInput.value === "undefined") {
        userInput.value = "";
        userInput.value += "%";
    } else {
        userInput.value += "%";
    }
}


let equal = document.getElementById("equalBtn");
equal.onclick = function() {
    let string = userInput.value;
    userInput.value = eval(string);
}