// variaveis
const screenOne = document.querySelector(".screen-one")
const screenTwo = document.querySelector(".screen-two")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (!screenOne.classList.contains("hide")) {
      handleTryClick()
    } else {
      handleResetClick()
    }
  }
})

// funções callbacks
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screenTwo.querySelector(
      "h2"
    ).innerText = `Você acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}
