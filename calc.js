var initialPrice = document.querySelector("#initial-price")
var quantityOfShares = document.querySelector("#shares-quantity")
var currentPrice = document.querySelector("#current-price")

var checkBtn = document.querySelector("#check-btn")

var outputDiv = document.querySelector("#output")


function calculateProfitAndLoss(a, b) {
    var sellingPrice = currentPrice.value;
    var costPrice = initialPrice.value
    var sharesQuantity = quantityOfShares.value;

    if (sellingPrice > costPrice) {
        // profit
        var profit = ((sellingPrice - costPrice) * sharesQuantity).toFixed(2)
        var profitPercent = ((profit / costPrice) * 100).toFixed(2)

        outputDiv.innerText = "Wow! Congratulations!! You have made a profit of " + profit + " and your profit percentage is " + profitPercent + "%"
    } else if (sellingPrice === costPrice) {
        // no profit/loss
        outputDiv.innerText = "Hmmm. There is no profit/gain. Remember to be patient!!"
    } else {
        //  loss
        var loss = ((costPrice - sellingPrice) * sharesQuantity).toFixed(2)
        var lossPercent = ((loss / costPrice) * 100).toFixed(2)

        outputDiv.innerText = "Ouch! You suffered a loss of " + loss + " and your loss percentage is " + lossPercent + "%"
    }
}

function submitHandler() {
    var checkProfitOrLoss = calculateProfitAndLoss()
}

checkBtn.addEventListener("click", submitHandler)