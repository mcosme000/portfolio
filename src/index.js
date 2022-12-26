const inputs = document.querySelectorAll(".input");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message")
const submitButton = document.querySelector("#submit-btn");
console.log(submitButton);

// Mark an input as valid

const addValidationClasses = (input, isValid) => {
  if (input.value === "") {
    return;
  }

  if (isValid) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}


// - - - VALIDATIONS

// Name validation
const validName = (input) => {
  const isValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(input.value);
  addValidationClasses(input, isValid);
  return isValid;
}

// Email validation
const validEmail = (input) => {
  const isValid = /^\w+@\w+\.\w{2,6}$/.test(input.value);
  addValidationClasses(input, isValid);
  return isValid;
}

// Message validation
const validMessage = (input) => {
  if (input.value !== "") {
    return true;
  }
}


// VALIDATE
const enableSubmitButton = () => {
  const emailIsValid = validEmail(emailInput);
  const nameIsValid = validName(nameInput);
  const messageIsValid = validMessage(messageInput);

  if (emailIsValid && nameIsValid && messageIsValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// EVENT
inputs.forEach((input) => {
  input.addEventListener("blur", enableSubmitButton)
}
)
