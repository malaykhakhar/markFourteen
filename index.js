const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const noOfStocks = document.querySelector("#stocks");
const output = document.querySelector(".output");
const checkButton = document.querySelector("#check-btn");

function emptyInput() {
  if (initialPrice.value === '' || currentPrice.value === '' || noOfStocks.value === '') {
    return true;
  }
  return false;
}

function calculateProfitAndLoss(sellingPrice, costPrice, stocks) {

  if (sellingPrice === costPrice) {
    output.innerText = "Since the initial price and current price is same you wont incur profit or loss"
  } else if (sellingPrice > costPrice) {
    var profit = (sellingPrice - costPrice) * stocks;
    var profitPercent = (profit / costPrice) * 100;
    output.style.color = 'green';
    output.innerText = `The profit is ${profit} and percentage is ${profitPercent}%`;
  } else {
    var loss = (costPrice - sellingPrice) * stocks;
    var lossPercent = (loss / costPrice) * 100;
    output.style.color = 'red';
    output.innerText = `The loss is ${loss} and percentage is ${lossPercent}%`;
  }
}

function clickHandler() {
  if (emptyInput()) {
    alert("Please enter data in all the input fields");
  } else {
    var sellingPrice = Number(currentPrice.value);
    var costPrice = Number(initialPrice.value);
    var stocks = Number(noOfStocks.value);
    calculateProfitAndLoss(sellingPrice, costPrice, stocks);
  }
}

checkButton.addEventListener("click", clickHandler);