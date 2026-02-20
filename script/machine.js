// common function for id input
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log("Id" , value);
    return value;
}

// common function for balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
     console.log("Balance",Number(balance));
     return Number(balance);
}

// Show only a section at a time
function showOnly(id){
document.getElementById("addmoney").classList.add("hidden");
document.getElementById("cashout").classList.add("hidden");
document.getElementById("transfer").classList.add("hidden");
document.getElementById("bonus").classList.add("hidden");
document.getElementById("pay-bill").classList.add("hidden");
document.getElementById("transection").classList.add("hidden");

document.getElementById(id).classList.remove("hidden");
}
   