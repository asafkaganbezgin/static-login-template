// Variables
let isDispError = false;

// Selectors
const formName = document.querySelector("#name-input");
const formEmail = document.querySelector("#email-input");
const formOptions = document.querySelector("#options");
const formPassword = document.querySelector("#password-input");
const button = document.querySelector("#next-button");

// Event listeners
formName.addEventListener("input", enableButton);
formEmail.addEventListener("input", enableButton);
formOptions.addEventListener("change", enableButton);
formPassword.addEventListener("input", enableButton);

// Functions
function enableButton(event) {
    if (formOptions.value) {
        document.getElementById("options").style.color = "black";
    }
    // Check if the email given by the user is valid.
    if (!isEmailValid(formEmail.value)) {
        button.disabled = true;
        if (formEmail.value.length !== 0) {
            document.getElementById("email-input").style.border = "1px solid red";
            document.getElementById("alert-message").hidden = false;
        } else {
            document.getElementById("email-input").style.border =
                "0.5px solid rgba(206, 206, 206, 0.57)";
            document.getElementById("alert-message").hidden = true;
        }
        return;
    } else if (isEmailValid(formEmail.value)) {
        button.disabled = false;
        document.getElementById("email-input").style.border =
            "0.5px solid rgba(206, 206, 206, 0.57)";
        document.getElementById("alert-message").hidden = true;
    }
    // Check if password field is longer than 8 characters.
    if (formPassword.value.length < 8) {
        button.disabled = true;
    }
    // Than check whether the input fields are not empty.
    else if (
        formName.value.length > 0 &&
        formEmail.value.length > 0 &&
        formPassword.value.length > 0 &&
        formOptions.value
    ) {
        button.disabled = false;
    } else button.disabled = true;
}

/**
 * Checks if the input email field contains a valid email address.
 * @param {String} controlString
 */
function isEmailValid(controlString) {
    var emailREGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailREGEX.test(controlString);
}
