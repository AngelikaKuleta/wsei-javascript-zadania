const errorMessage = document.getElementsByClassName("error-message")[0];
// const successMessage = document.getElementsByClassName("success-message")[0];
const agreeCheckbox = document.getElementById("agree");

document.getElementsByTagName("form")[0].addEventListener("submit", function(e) {
    e.preventDefault();

    let formIsValidated = true;

    const formControl = document.getElementsByClassName("form-control");

    for (let i = 0; formIsValidated && i < formControl.length; i++) {
        let el = formControl[i];
        console.log(el.value)
        if (el.id == "email" && !el.value.includes("@")) {
            errorMessage.innerHTML = "Email musi posiadać znak @"
            formIsValidated = false;
            return false
        }
        else if (el.id == "name" && !(el.value.length > 6)) {
            errorMessage.innerHTML = "Twoje imię jest za krótkie"
            formIsValidated = false;
            return false
        }
        else if (el.id == "surname" && !(el.value.length > 6)) {
            errorMessage.innerHTML = "Twoje nazwisko jest za krótkie"
            formIsValidated = false;
            return false
        }
        else if (el.id == "pass1" && !(el.value.length > 0)) { 
            errorMessage.innerHTML = "Hasła nie są takie same lub puste"
            formIsValidated = false;
            return false
        }
        else if (el.id == "pass2" && el.value !== document.getElementById("pass1").value) { 
            errorMessage.innerHTML = "Hasła nie są takie same lub puste"
            formIsValidated = false;
            return false         
        }
    }
    if (formIsValidated && !agreeCheckbox.checked) {
        errorMessage.innerHTML = "Musisz zaakceptować warunki"
        formIsValidated = false;
        return false
    }  

    if (formIsValidated)
        this.submit();
    else
        return false
})