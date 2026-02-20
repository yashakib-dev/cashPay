document.getElementById("cashout-btn").addEventListener("click", function () {
  // get cashout number and validation
  const cashoutNumber = getValueFromInput("cashout-number");

  if (cashoutNumber.length != 11) {
    alert("Invalid Number!!");
    return;
  }

  // get cashout amount
  const cashoutAmount = getValueFromInput("cashout-amount");
  const balanceAmount = getBalance();

  const newBalance = balanceAmount - Number(cashoutAmount); //calculate new balance

  if (newBalance < 0) {
    alert("Invalid Amount.");
    return;
  }

  const cashoutPin = getValueFromInput("cashout-pin"); //get pin

  if (cashoutPin === "0987") {
    alert("Withdraw Successful.");

    document.getElementById("balance").innerText = newBalance; //set the remaining balance to newBalance
  } else {
    alert("Invalid pin or Agent Number.");
    return;
  }
});

document.getElementById("logout").addEventListener("click", function () {
  window.location.assign("index.html");
});
