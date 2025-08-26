    function getInputValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
    }

    function getInputValue (id){
    const inputValue = document.getElementById(id);
    const inputValueFinal = inputValue.value;
    return inputValueFinal;
    }

    function getInnerText (id){
    const innerTextElement = document.getElementById(id);
    const innerTextElementValue = parseInt(innerTextElement.innerText);
    return innerTextElementValue;
    }

    function setInnerText (value){
        const setInnerTextElement = document.getElementById("available-balance");
        setInnerTextElement.innerText = value;
    }


document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const validPin = 1234;

    const bank = document.getElementById("bank").value;
    const accountNumber = getInputValue("account-number");
    const addAmount = getInputValueNumber("add-amount")
    const pinNumber = getInputValueNumber("pin-number");

    const availableBalance = getInnerText ("available-balance");

    if (bank === "" || accountNumber === "" || addAmount === "" || pinNumber === "") {
        alert("Please fill out all fields");
        return;
    }
    if (accountNumber.length !== 11) {
        alert("Enter valid account number");
        return;
    }

    if (pinNumber !== validPin) {
        alert("Oh! Wrong Pin! Try again!");
        return;
    }
    const totalAvailableBalance = availableBalance + addAmount;

    setInnerText (totalAvailableBalance);

})

function buttonHandler (id){
const forms = document.getElementsByClassName ("form");
console.log(forms);
for (const form of forms){
    form.style.display = "none";
}

document.getElementById(id).style.display = "block";
}


document.getElementById("add-money-button").addEventListener("click", function () {
buttonHandler ("add-money-parent");
})

document.getElementById("cash-out-button").addEventListener("click", function () {
buttonHandler ("cash-out-parent");

})

document.getElementById("transfer-money-button").addEventListener("click", function () {
buttonHandler ("transfer-money-parent");

})


document.getElementById("withdraw-money-btn").addEventListener("click", function (e) {
    e.preventDefault();


    // const validAgentNumber = 12341234123;
    const validPin = 1234;
    const agentNumber = getInputValue("agent-number"); 
    const amount = getInputValueNumber("amount");
    const pinNumberCashOut = getInputValueNumber("pin-number-cash-out");

    const availableBalance = getInnerText ("available-balance");

    if (agentNumber === "" || isNaN(amount) || isNaN(pinNumberCashOut)) {
        alert("Please fill out all fields");
        return;
    }

    if (agentNumber.length !== 11) {
        alert("Enter valid agent number");
        return;
    }

    if (pinNumberCashOut !== validPin) {
        alert("Oh! Wrong Pin! Try again!");
        return;
    }

    const totalAvailableBalance = availableBalance - amount;
    setInnerText(totalAvailableBalance) ;
});