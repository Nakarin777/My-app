document.getElementById("Calculate1").addEventListener("click", function()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "SUM : " +sum;
});
document.getElementById("Calculate2").addEventListener("click", function()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "SUM : " +sum;
});
document.getElementById("Calculate3").addEventListener("click", function()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "SUM : " +sum;
});
document.getElementById("Calculate4").addEventListener("click", function()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = "SUM : " +sum;
});

function myalert(){
    alert("Hello world");
};

function Calculate1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    alert("SUM : " +sum);
};
function Calculate2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    alert("SUM : " +sum);
};
function Calculate3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    alert("SUM : " +sum);
};
function Calculate4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    alert("SUM : " +sum);
};
function bmi(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1 / ((num2 / 100) ** 2);
    alert("BMI : " +sum.toFixed(2));
};