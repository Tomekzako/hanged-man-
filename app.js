document.addEventListener("DOMContentLoaded", function() {
  const password = "andre greipel".toUpperCase();
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

  const hiddenPasswordArr = hiddenPassword.split('');


  function checkLetter(letter) {
    const passwordArr = password.split('');
    passwordArr.forEach((el, index) => {
      if (el == letter) {
        hiddenPasswordArr[index] = letter;
      }
    });
    if (hiddenPasswordArr.indexOf('-') == -1) {
      alphabetBox.innerHTML = `<p>CONGRATULATIONS!!!! YOU HAVE WON!</p>`;
    };
    document.querySelector(".board").innerHTML = hiddenPasswordArr.join('');
  };

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
    document.querySelector(".hang").innerHTML = `<img src="img/s${number}.jpg" alt="image ${number}">`;
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

      checkLetter(letter.textContent);
    
    for (el in password) {
      const match = password.charAt(el) == letter.textContent;
      const match2 = password.charAt(el).match(letter.textContent);
      lettersArray.push(match);
    }
    console.log(letter.textContent);

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
