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
    
   