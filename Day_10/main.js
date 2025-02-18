var user = document.getElementById("name");
function changeName() {
  var username = prompt("Please enter your username");
  user.textContent = username;
}
var photo = document.getElementById("photo");
function on() {
  photo.src = "/Day_10/pic_bulbon.gif";
}
function off() {
  photo.src = "/Day_10/pic_bulboff.gif";
}
var Res = document.getElementById("result");
function calculate() {
  var scoreInput = document.getElementById("gpa").value;
  if (scoreInput >= 90) {
    Res.textContent = "Grad: A for / " + scoreInput;
  } else if (scoreInput >= 80) {
    Res.textContent = "Grad: B for / " + scoreInput;
  } else if (scoreInput >= 70) {
    Res.textContent = "Grad: C for / " + scoreInput;
  } else scoreInput >= 50;
  Res.textContent = "Grad: F for / " + scoreInput;
}
function product_cost(quatity, price) {
  var price = document.getElementById("price").value;
  var quatity = document.getElementById("quantity").value;
  var cost = document.getElementById("cost");
  cost.textContent = "" + price * quatity;
}
function profit() {

    // var price = document.getElementById("price").value;
    // var quatity = document.getElementById("quantity").value;
    // var cost = document.getElementById("cost");
    // cost.textContent = "" + price * quatity;
  }