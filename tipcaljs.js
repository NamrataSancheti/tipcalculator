let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let billAmountInputValue = billAmountInput.value;
let errorMessageElement = document.getElementById("errorMessage");
let percentageTipInputValue = percentageTipInput.value;
let totalInput = document.getElementById("totalAmount");
let tipAmountInput = document.getElementById("tipAmount");

function calculateTip() {
    let errorMessage = "Please Enter a Valid input."
    let billAmountInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;
    if (billAmountInputValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else if (percentageTipInputValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;
        tipAmountInput.value = calculatedTip;
        totalInput.value = calculatedTotal;
    }

}