const inputForm = document.querySelector("#input");
const output = document.querySelector("#output");

const rangeInput = inputForm.querySelector("#range");
const guessedInput = inputForm.querySelector("#guessed");

const result = output.querySelector("#result");
const finalResult = output.querySelector("#final-result");

inputForm.addEventListener("submit", playTheGame);

function playTheGame(e) {
  e.preventDefault();
  output.classList.remove("hidden");

  const userRange = parseInt(rangeInput.value) + 1;
  const comNumber = Math.floor(Math.random() * userRange);
  const userNumber = guessedInput.value;
  result.innerText = `You chose: ${userNumber}, the machine chose: ${comNumber}`;

  finalResult.innerText = userNumber == comNumber ? "You Win!" : "You Lost";
}
