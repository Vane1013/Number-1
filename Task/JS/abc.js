function verify() {
    console.log("a, b, c")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    console.log(a, b, c)

    /* let low, high
    if (a < b) { low = a;    high = b;  }
    else { low = b; high = a; } */

    if (a < b && b < c) {
        result = "a < b && b < c"
        check = true;
    }
    else {
        if (a < b && b > c) {
            result = "a < b && b > c"
            check = true;
        }
        else {
            result = "Ни одно из перечисленных условий не выполняется"
            check = false;
        }
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}


let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)