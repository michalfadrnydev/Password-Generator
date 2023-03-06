//FUNGOVÁNÍ KOPÍROVÁNÍ HESLA
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

//FUGOVÁNÍ ZOBRAZENÍ ČÍSLIC PODLE ZMĚNY INPUT-RANGE
//Input samotny - pro hodnotu slideru z inputu
let inputRangeElement = document.querySelector(".input-range");
let passwInputValue = inputRangeElement.value;

//Číslo počtu znaků ve spanu
let spanSymbolsNumberElement = document.querySelector("#number-of-symbols");
spanSymbolsNumberElement.innerHTML = passwInputValue;

inputRangeElement.addEventListener("input", function() {
    passwInputValue = inputRangeElement.value;
    spanSymbolsNumberElement.innerHTML = passwInputValue;
    return passwInputValue;
})

//Checkboxes
let checkboxUpperElement = document.querySelector(".checkbox-upper");
let checkboxLowerElement = document.querySelector(".checkbox-lower");
let checkboxNumbersElement = document.querySelector(".checkbox-numbers");
let checkboxSymbolsElement = document.querySelector(".checkbox-symbols");

/*
console.dir(checkboxUpperElement);
console.log(checkboxUpperElement.checked)
if (checkboxUpperElement.checked == "true") {
};
*/

/* -------------------HESLO GENERETING----------------------*/
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["+", "-", "&", "!", ":","_", "*", "?", ":", "#", "@"];

let letterCount = 4;
let numberCount = 4;
let symbolCount = 2;

let newPasswordLetters = [];
let newPasswordNumbers = [];
let newPasswordSymbols = [];

//Random index from any list
let randListIndex = function ( list ) {
    let randIndex = Math.floor(Math.random()*(list.length-1))+1;
    return randIndex;
}
//Picking signs from any list based on count of signs & adding it to empty list
let addSignsToList = function (pickingList, numberOfSigns, addingList) {
    for (let i = 0; i < numberOfSigns; i++) {
        addingList.push(pickingList[randListIndex(pickingList)]);
    }
}

//Generating list of random letters, numbers, symbols
addSignsToList(letters, letterCount, newPasswordLetters);
addSignsToList(numbers, numberCount, newPasswordNumbers);
addSignsToList(symbols, symbolCount, newPasswordSymbols);

console.log(newPasswordLetters);
console.log(newPasswordNumbers);
console.log(newPasswordSymbols);

let newOrderedPassw =[];
newOrderedPassw.push(...newPasswordLetters);
newOrderedPassw.push(...newPasswordNumbers);
newOrderedPassw.push(...newPasswordSymbols);
console.log(newOrderedPassw);

let newPassw = [];
let randIndex;

while (newOrderedPassw.length != 0) {
    randIndex = Math.floor( Math.random() * newOrderedPassw.length );
    newPassw.push(newOrderedPassw[randIndex]);
    newOrderedPassw.splice(randIndex, 1);
}

console.log(newPassw);


