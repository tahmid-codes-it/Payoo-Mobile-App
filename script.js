document.getElementById("login-btn").addEventListener("click", function (e){
    e.preventDefault();

    const mobileNumber = 0123456789;
    const pinNumber = 1111;

    const userMobileNumber = document.getElementById("mobile-number").value;

    const userMobileNumberConverted = parseInt(userMobileNumber);

    const userPinNumber = document.getElementById("pin-number").value;

    const userPinNumberConverted = parseInt(userPinNumber);

    if (mobileNumber === userMobileNumberConverted && pinNumber === userPinNumberConverted){
        window.location.href = "home.html";
    }

    else{
        alert("invalid credentials")
    }
})