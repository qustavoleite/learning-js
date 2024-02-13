import { Modal } from "/js/modal.js"
import { AlertError } from "/js/alert-error.js"
import { calculateIMC, notANumber } from "/js/utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

function handleFormSubmit(event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }
  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);

  inputHeight.value = "";
  inputWeight.value = "";
}

form.onsubmit = handleFormSubmit;
form.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleFormSubmit(event);
  }
})

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  Modal.open()
}