var initialPrice = document.querySelector("#initial-price")
var quantityOfShares = document.querySelector("#shares-quantity")
var currentPrice = document.querySelector("#current-price")

var checkBtn = document.querySelector("#check-btn")

var outputDiv = document.querySelector("#output")


function calculateProfitAndLoss(a, b) {
     
    var sellingPrice = Number(currentPrice.value);
    var costPrice = Number(initialPrice.value);
    var sharesQuantity = Number(quantityOfShares.value);

    if (sellingPrice > costPrice) {
        // profit
        var profit = ((sellingPrice - costPrice) * sharesQuantity).toFixed(2)
        var profitPercent = (((sellingPrice-costPrice) / costPrice) * 100).toFixed(2)
        
        outputDiv.innerText = "Wow! Congratulations!! You have made a profit of " + profit + " and your profit percentage is " + profitPercent + "%"
        
        document.getElementById("output").style.color = "green";
        
    } else if (sellingPrice === costPrice) {
        // no profit/loss
        
        outputDiv.innerText = "Hmmm. There is no profit/gain. Remember to be patient!!"
        
        document.getElementById("output").style.color = "black";

    } else {
        //  loss
        var loss = ((costPrice - sellingPrice) * sharesQuantity).toFixed(2)
        var lossPercent = (((costPrice - sellingPrice) / costPrice) * 100).toFixed(2)
        
        outputDiv.innerText = "Ouch! You suffered a loss of " + loss + " and your loss percentage is " + lossPercent + "%"
        
        document.getElementById("output").style.color = "red";
    }
}

function submitHandler() {
    if(document.getElementById("initial-price").value.length == 0)
{
    alert("Please enter valid details")
    
} else if (document.getElementById("shares-quantity").value.length == 0 || document.getElementById("shares-quantity").value<=0){
    alert("Please enter valid details")
} else if (document.getElementById("current-price").value.length == 0) {
    alert("Please enter valid details")
} else {
    var checkProfitOrLoss = calculateProfitAndLoss()
}
}

checkBtn.addEventListener("click", submitHandler)