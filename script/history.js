   document.getElementById("history-btn") 
            .addEventListener("click", function(){
                console.log("btn clicked")
                const bankAccount = getValueFromInput("add-money-bank");
                const addAmount = getValueFromInput("add-money-amount");
                const history = document.getElementById("history");
                console.log(history);
                const newHistory = document.createElement("div");
                console.log(newHistory)
                newHistory.innerHTML =  `
                <div class="flex gap-4 w-11/12 mx-auto pt-4  rounded-xl p-4 shadow bg-base-100">
                <div class="flex justify-between w-11/12 mx-auto pb-6">
                    ${addAmount} Dollar added successfully from ${bankAccount} at ${ new Date()}
                </div>
                 </div>   
     
                `;
                           history.append(newHistory);

            })  
   