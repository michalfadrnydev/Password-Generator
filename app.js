const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["+", "-", "&", "!", ":","_", "*", "?", ":", "#", "@"];

/*FUNGOVÁNÍ KOPÍROVÁNÍ HESLA*/
let copyButtonElement = document.querySelector(".copy-button");
let generatedPasswordElement = document.querySelector(".generated-password");
let copyMessageElement = document.querySelector(".copy-message");

copyButtonElement.addEventListener("click", () => {
    let generatedPassword = generatedPasswordElement.textContent;
    navigator.clipboard.writeText(generatedPassword)
    .then( function() {
        copyMessageElement.classList.remove("no-display");
        setTimeout(() => {
            copyMessageElement.classList.add("no-display");
          }, "800")
    });
});

/*FUGOVÁNÍ ZOBRAZENÍ ČÍSLIC PODLE ZMĚNY INPUT-RANGE*/
/*Input samotny - pro hodnotu slideru z inputu*/
let inputRangeElement = document.querySelector(".input-range");
let passwInputValue = inputRangeElement.value;

/*Číslo počtu znaků ve spanu*/
let spanSymbolsNumberElement = document.querySelector("#number-of-symbols");
spanSymbolsNumberElement.innerHTML = passwInputValue;

inputRangeElement.addEventListener("input", function() {
    passwInputValue = inputRangeElement.value;
    spanSymbolsNumberElement.innerHTML = passwInputValue;
    return passwInputValue;
})

/*Checkboxy*/
let checkboxUpperElement = document.querySelector(".checkbox-upper");
let checkboxLowerElement = document.querySelector(".checkbox-lower");
let checkboxNumbersElement = document.querySelector(".checkbox-numbers");
let checkboxSymbolsElement = document.querySelector(".checkbox-symbols");

console.dir(checkboxUpperElement);
console.log(checkboxUpperElement.checked)


if (checkboxUpperElement.checked == "true") {

};






