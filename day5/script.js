
function add(){
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    res = num1 + num2
    document.getElementById("result").value = res;
}
function multiply(){
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    res = num1 * num2
    document.getElementById("result").value = res;
}

function subtract(){
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    res = num1 - num2
    document.getElementById("result").value = res;
}
function divide(){
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    res = num1 / num2
    document.getElementById("result").value = res;
}

document.getElementById("btnAdd").addEventListener("click", add);
document.getElementById("btnSubtract").addEventListener("click", subtract);
document.getElementById("btnMultiply").addEventListener("click", multiply);
document.getElementById("btnDivide").addEventListener("click", divide);