
document.getElementById("bill-btn")
        .addEventListener("click", function(){
            // get bank account
            const bankAccount = getValueFromInput("institute");
            if(bankAccount === "Select an Institute"){
                alert("Please select an Institute.");
                return;
            }

            const billAccountNumber = getValueFromInput("biller-acc-number");
            const billAmount = getValueFromInput("bill-amount");
            const billPin = getValueFromInput("bill-pin");
            const currentBalance = getBalance() - Number(billAmount);

             if (currentBalance < 0) {
             alert("Invalid Amount.");
              return;
              }
            if(billAccountNumber === "01823456789" && billAmount >= 0 && billPin ==="0987"){
                alert(`${billAmount} Dollar paid successfully for ${bankAccount} at ${ new Date()}`);
                document.getElementById("balance").innerText = currentBalance;

            }
            else{
                alert("Transaction failed!");
                return;
            }

            
        })