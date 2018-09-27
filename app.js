document.addEventListener('DOMContentLoaded', function () {

    const password = "Bez pracy nie ma kołaczy".toUpperCase();
    let hiddenPassword = "";

    for (el in password) {
        if (password.charAt(el) == " ") {
            hiddenPassword += " ";
        } else {
            hiddenPassword += "-";

        }
    }

    console.log(hiddenPassword);

    function writePassword() {
        document.querySelector('.board').innerHTML = hiddenPassword;
    }

    writePassword();

});