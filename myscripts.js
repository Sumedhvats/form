function validateForm() {
    var returnForm = true;

    var pass = document.forms["form"]["pass"].value;
    var pass2 = document.forms["form"]["Confirm_pass"].value;

    if (pass !== pass2) {
        setError("Confirm_pass", "Passwords do not match");
        returnForm = false;
    } else {
        clearError("Confirm_pass"); 
    }

    return returnForm;
}

function setError(id, error) {
    var element = document.getElementById(id);
    element.style.border = "2px solid red";
    var errorElement = document.getElementById(id + "-error");
    if (!errorElement) {
        errorElement = document.createElement("div");
        errorElement.id = id + "-error";
        errorElement.style.color = "red";
        errorElement.style.fontSize = "12px";
        element.parentNode.appendChild(errorElement);
    }
    errorElement.innerText = error;
}
function clearError(id) {
    var element = document.getElementById(id);
    element.style.border = "2px solid black";

    var errorElement = document.getElementById(id + "-error");
    if (errorElement) {
        errorElement.remove();
    }
}

function submitForm() {
    if (validateForm()) {
        document.getElementById("signup-form").submit();
    }
}