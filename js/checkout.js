const letterPattern = /^[A-Z]+$/i;
const emailPattern = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

// Get the input fields
var fName = document.getElementById("fName");
var fLastN = document.getElementById("fLastN");
var fEmail = document.getElementById("fEmail");
var fPassword = document.getElementById("fPassword");
var fAddress = document.getElementById("fAddress");
var fPhone = document.getElementById("fPhone");

// Get the error elements
var errorName = document.getElementById("errorName");
var errorLastN = document.getElementById("errorLastN");
var errorEmail = document.getElementById("errorEmail");
var errorPassword = document.getElementById("errorPassword");
var errorAddress = document.getElementById("errorAddress");
var errorPhone = document.getElementById("errorPhone");

// Exercise 6
function validate() {

    let isValidNameResult = validateNameAndLastName(fName);
    inputStyles(isValidNameResult, fName, errorName);

    let isValidLastNResult = validateNameAndLastName(fLastN);
    inputStyles(isValidLastNResult, fLastN, errorLastN);

    let isValidAddressResult = validateAdress(fAddress);
    inputStyles(isValidAddressResult, fAddress, errorAddress);

    let isValidEmailResult = validateEmail(fEmail);
    inputStyles(isValidEmailResult, fEmail, errorEmail);

    let isValidPhoneResult = validatePhone(fPhone);
    inputStyles(isValidPhoneResult, fPhone, errorPhone);

    let isValidPasswordResult = validatePassword(fPassword);
    inputStyles(isValidPasswordResult, fPassword, errorPassword);

    alertMessage(isValidNameResult, isValidLastNResult, isValidAddressResult, isValidEmailResult, isValidPhoneResult, isValidPasswordResult);
}

// Validate fields entered by the user: name, phone, password, and email
function validateNameAndLastName(input) {

    if (input.value.length < 3 || !letterPattern.test(input.value)) {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}

function validateEmail(input) {

    if (input.value.length < 3 || !emailPattern.test(input.value)) {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}

function validateAdress(input) {

    if (input.value.length < 3) {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}


function validatePhone(input) {

    if (input.value.length !== 9) {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}

function validatePassword(input) {
    let value = input.value;
    console.log(value);
    if (input.value.length < 3 || !passwordPattern.test(input.value)) {
        isValid = false;
    } else {
        isValid = true;
    }
    console.log("password", isValid)
    return isValid;
}



function alertMessage(isValidName, isValidLastN, isValidAddress, isValidEmail, isValidPhone, isValidPassword) {
    if (!isValidName || !isValidLastN || !isValidAddress || !isValidEmail || !isValidPhone || !isValidPassword) {
        alert("Error");
    } else {
        alert("OK");
    }
}

function inputStyles(isValid, finput, errorInput) {

    if (!isValid) {
        finput.style.borderColor = "red";
        errorInput.style.display = "block";
    } else {

        finput.style.borderColor = "green ";
        errorInput.style.display = "none";
    }

}