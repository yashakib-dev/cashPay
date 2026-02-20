document.getElementById("add-money-btn")
        .addEventListener("click", function(){
            // get bank account
            const bankAccount = getValueFromInput("add-money-bank");
            if(bankAccount === "Select a Bank"){
                alert("Please select a bank.");
                return;
            }

            const addAccountNumber = getValueFromInput("add-acc-number");
            const addAmount = getValueFromInput("add-money-amount");
            const addPin = getValueFromInput("add-money-pin");
            const currentBalance = getBalance() + Number(addAmount);
            if(addAccountNumber === "01823456789" && addAmount >= 0 && addPin ==="0987"){
                alert(`Money added successfully from ${bankAccount} at ${ new Date()}`);
                document.getElementById("balance").innerText = currentBalance;
            }
            else{
                alert("Transaction failed");
                return;
            }

            
        })