document.getElementById("cashout-btn")
        .addEventListener("click", function(){

            const cashoutNumberInput = document.getElementById("cashout-number");
            const cashoutNumber = cashoutNumberInput.value;
            console.log(cashoutNumber);
            if(cashoutNumber.length != 11)
            {
                alert("Invalid Number!!");
                return;
            }
            


            const cashoutAmountInput = document.getElementById("cashout-amount");
            const cashoutAmount = cashoutAmountInput.value;
            console.log(cashoutAmount);

            const initalBalance = document.getElementById("balance");
            const balanceAmount = initalBalance.innerText;
                console.log(balanceAmount);
            const newBalance = Number(balanceAmount) - Number(cashoutAmount);
               
            if(newBalance < 0){
                alert("Invalid Amount.");
                return;
            }

            const cashoutPinInput = document.getElementById("cashout-pin");
            const cashoutPin = cashoutPinInput.value;
            console.log(cashoutPin);

            if(cashoutPin === "0987"){
                alert("Withdraw Successful.");

                initalBalance.innerText = newBalance;
                 console.log(newBalance);
            }
            else{
                alert("Invalid pin or Agent Number.");
                return;
            }
        })