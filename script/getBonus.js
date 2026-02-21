document.getElementById("bonus-btn")
        .addEventListener("click", function(){
            const couponNumber = getValueFromInput("coupon-number");

            if(couponNumber.length != 6){
                alert("Coupon number length must be 6.");
                return;
            }
            const newAmount = getBalance() + 100;
            if(couponNumber === "Eid100"){
                alert("Congratulation!! You get $100.");
                 document.getElementById("balance").innerText = newAmount; 

            }
            else{
                alert("Enter a valid coupon number.");
            }
        })