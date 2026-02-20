document.getElementById("login-button")
        .addEventListener("click", function(){
                const numberInput = document.getElementById("mobile-number");
                const validNumber = numberInput.value;
                if(validNumber.length != 11){
                    alert("Number must be 11 digit.")
                    return;
                }
                console.log(validNumber);

                const pin = document.getElementById("pin-number");
                const pinNumber = pin.value;
                if( validNumber === "01823456789" && pinNumber === "0987"){
                    alert("Login successful😍");
                    window.location.assign("home.html");
                }
                else{
                    alert("Login failed😞. Try again.");
                    return;
                }
        })





