const inputValidationElement = document.querySelector("#validation-input");
const inputLength = inputValidationElement.getAttribute("data-length");

inputValidationElement.addEventListener("input", (event) => {
    if (event.currentTarget.value.length === Number(inputLength)) {
        inputValidationElement.classList.add("valid");
        inputValidationElement.classList.remove("invalid");
    } else {
        inputValidationElement.classList.add("invalid");
        inputValidationElement.classList.remove("valid");
    }
});