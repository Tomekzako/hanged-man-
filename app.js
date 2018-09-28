document.addEventListener("DOMContentLoaded", function() {
  const password = "Bez pracy nie ma kołaczy".toUpperCase();
  const alphabetBox = document.querySelector(".alphabet");
  let hiddenPassword = "";
  let counter = 0;

  for (el in password) {
    if (password.charAt(el) == " ") {
      hiddenPassword += " ";
    } else {
      hiddenPassword += "-";
    }
  }

  function writePassword() {
    document.querySelector(".board").innerHTML = hiddenPassword;
  }

  function init() {
    const alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzżź"
      .toUpperCase()
      .split("");

    const letter = alphabet
      .map(el => {
        return `<div class="letter">${el}</div>`;
      })
      .join("");

    alphabetBox.innerHTML = letter;
    writePassword();
  }

  function showImage(number) {
    document.querySelector(
      ".hang"
    ).innerHTML = `<img src="img/s${number}.jpg" alt="image ${number}">`;
  }

  function clickLetter(e) {
    const lettersArray = [];
    const letter = e.target;
    if (
      !letter.matches(".letter") ||
      letter.matches(".letter-fail") ||
      letter.matches(".letter-success")
    )
      return;

    for (el in password) {
      const match = password[el] == letter.textContent;
      lettersArray.push(match);
    }

    if (lettersArray.includes(true)) {
      letter.classList.add("letter-success");
    } else {
      counter++;
      if (counter > 8) {
        showImage(counter);
        alphabetBox.innerHTML = `<p>GAME OVER !!!!!</p>`;
      } else {
        showImage(counter);
        letter.classList.add("letter-fail");
      }
    }
  }

  alphabetBox.addEventListener("click", clickLetter);
  init();
});
