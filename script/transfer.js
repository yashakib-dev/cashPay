document.getElementById("transfer-btn")
        .addEventListener("click", function(){

            const transferNumber = getValueFromInput("transfer-number");
            const transferAmount = getValueFromInput("transfer-amount");
            const pinNumber = getValueFromInput("transfer-pin")
            if(transferNumber.length != 11){
                alert("Invalid Number!");
                return;
            }
                   const newAmount = getBalance() - Number(transferAmount);
                   
                     if(newAmount < 0){
                        alert("Invalid Amount!!");
                        return;
            }


            if( transferNumber === "01823456789" && transferAmount >= 0 && pinNumber === "0987"){

                alert(`${transferAmount} Dollar transfer successful.`);
                document.getElementById("balance").innerText = newAmount; 
            }
            else{
                alert("Transaction Failed. Try with valid Information.");
                return;
            }
     
          
        })