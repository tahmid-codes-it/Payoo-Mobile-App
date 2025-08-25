document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const validPin = 1234;

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = document.getElementById("add-amount").value;
    const addAmountConverted = parseInt(addAmount);
    const pinNumber = document.getElementById("pin-number").value;

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if (bank === "" || accountNumber === "" || addAmountConverted === "" || pinNumber === "") {
        alert("Please fill out all fields");
        return;
    }
    if (accountNumber.length !== 11) {
        alert("Enter valid account number");
        return;
    }

    if (pinNumber !== validPin) {
        alert("Oh! Wrong Pin! Try again!")
    }
    const totalAvailableBalance = availableBalance + addAmountConverted;

    document.getElementById("available-balance").innerText = totalAvailableBalance;

})


document.getElementById("add-money-button").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
})

document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
})


document.getElementById("withdraw-money-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const validPin = 1234;
    const agentNumber = document.getElementById("agent-number").value;
    const amount = parseInt(document.getElementById("amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if (agentNumber === "" || amount === "" || pinNumber === "") {
        alert("Please fill out all fields");
        return;
    }

    if (agentNumber.length !== 11) {
        alert("Enter valid agent number");
        return;
    }

    if (pinNumber !== validPin) {
        alert("Oh! Wrong Pin! Try again!");
    }

    totalAvailableBalance = availableBalance - amount;
    document.getElementById("available-balance").innerText = totalAvailableBalance;
})