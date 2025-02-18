var cust = 3313;
var Balance = 1000;
var userPass = prompt("Please Enter Your Password");
if (userPass == cust) {
  ATM();
} else {
  document.write("Wrong Password!!");
}

function withdrawal() {
  var withdraw = prompt("Amount to be withdrawn ?");
  // 500000 < 100000

  if (Balance < withdraw) {
    alert("Sorry Your Balance Not Much");
    ATM();
  } else {
    Balance -= withdraw;
    getBalance();
  }
}
function Deposit() {
  var Deposit = prompt("Amount to be add ?");
  // 500000 < 100000
  Balance += parseInt(Deposit);
  getBalance();
  ATM();
}
function getBalance() {
  alert("Your Balance Is " + Balance);
  ATM();
}
function exit() {
  alert("Thank You For Using Our ATM");
}

function ATM() {
  var choice = prompt(
    "1 - Get balance\n 2 - WithdrowMoney\n 3 - Deposit\n 4-exit\n"
  );
  //1
  if (choice == 1) {
    getBalance();
  } else if (choice == 2) {
    withdrawal();
  } else if (choice == 3) {
    Deposit();
  } else if (choice == 4) {
    exit();
    
  }
}
