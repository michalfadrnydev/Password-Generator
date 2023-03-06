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
let numberOfSymbols = 0;

inputRangeElement.addEventListener("input", function() {
    passwInputValue = inputRangeElement.value;
    spanSymbolsNumberElement.innerHTML = passwInputValue;
    numberOfSymbols = inputRangeElement.value;
})

//Checkboxes
let checkboxLowerLetterElement = document.querySelector(".checkbox-lower");
let checkboxNumberElement = document.querySelector(".checkbox-numbers");
let checkboxSymbolElement = document.querySelector(".checkbox-symbols");
let checkboxUpperLetterElement = document.querySelector(".checkbox-upper");

let checkboxLowerLetterStatus = checkboxLowerLetterElement.checked;
let checkboxNumberStatus = checkboxNumberElement.checked;
let checkboxSymbolStatus = checkboxSymbolElement.checked;
let checkboxUpperLetterStatus = checkboxUpperLetterElement.checked;

checkboxLowerLetterElement.addEventListener("change", function() {
    checkboxLowerLetterStatus = checkboxLowerLetterElement.checked;
})
checkboxNumberElement.addEventListener("change", function() {
    checkboxNumberStatus = checkboxNumberElement.checked;
})
checkboxSymbolElement.addEventListener("change", function() {
    checkboxSymbolStatus = checkboxSymbolElement.checked;
})
checkboxUpperLetterElement.addEventListener("change", function() {
    checkboxUpperLetterStatus = checkboxUpperLetterElement.checked;
})

/* -------------------HESLO GENERETING----------------------*/
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["+", "-", "&", "!", ":","_", "*", "?", ":", "#", "@"];

let parameterWarningElement = document.querySelector("#par-warning");

class Password{
    constructor(numberOfSymbols) {
        // Definování počtu symbolů
        this.numberOfSymbols = numberOfSymbols;
        // Definování statusu indexů
        this.letterAddStatus = checkboxLowerLetterStatus;
        this.numberAddStatus = checkboxNumberStatus;
        this.symbolAddStatus = checkboxSymbolStatus;
        this.letterUpperAddStatus = checkboxUpperLetterStatus;
        //Definování arrays pro znaky
        this.letterList = [];
        this.numberList = [];
        this.symbolList = [];

        if(this.numberOfSymbols === 0) {
            parameterWarningElement.classList.remove("no-display");
            setTimeout(() => {
                parameterWarningElement.classList.add("no-display");
            }, "1500")
        }
        
        //Stanovení počtu znaků na pro jednotlivé arrays na základě inputu
        else if (this.numberOfSymbols % 3 === 0) {
            this.letterCount = numberOfSymbols / 3;
            this.numberCount = numberOfSymbols / 3;
            this.symbolCount = numberOfSymbols / 3;
        } else if (this.numberOfSymbols % 3 === 1) {
            this.letterCount = Math.floor(numberOfSymbols / 3) + 1;
            this.numberCount = Math.floor(numberOfSymbols / 3);
            this.symbolCount = Math.floor(numberOfSymbols / 3);
        } else if (this.numberOfSymbols % 3 === 2) {
            this.letterCount = Math.floor(numberOfSymbols / 3) + 1;
            this.numberCount = Math.floor(numberOfSymbols / 3) + 1;
            this.symbolCount = Math.floor(numberOfSymbols / 3);
        };

        // Funkce pro výběr náhodných znaků na základě počtu znaků
        let randListIndex = function ( list ) {
            let randIndex = Math.floor(Math.random()*(list.length - 1)) + 1;
            return randIndex;
        }
        let addSignsToList = function (pickingList, numberOfSigns, addingList) {
            for (let i = 0; i < numberOfSigns; i++) {
                addingList.push(pickingList[randListIndex(pickingList)]);
            }
        }
        
        // Přidání náhodně vybraných znaků do prázdných array
        addSignsToList(letters, this.letterCount, this.letterList);
        addSignsToList(numbers, this.numberCount, this.numberList);
        addSignsToList(symbols, this.symbolCount, this.symbolList);

        // Pokud jsou zakliklé upper case znaky, definování nového listu
        this.letterUpperList = [];

        if (this.letterList.length%2 === 0) {
            for (let i = 0; i < this.letterList.length/2; i++) {
                this.letterUpperList.push(this.letterList[i].toUpperCase());
            }
            for (let i = this.letterList.length/2; i < this.letterList.length; i++) {
                this.letterUpperList.push(this.letterList[i]);
            }
        }
        else if (this.letterList.length%2 !== 0) {
            for (let i = 0; i < Math.floor(this.letterList.length/2); i++) {
                this.letterUpperList.push(this.letterList[i].toUpperCase());
            }
            for (let i = Math.floor(this.letterList.length/2); i < this.letterList.length; i++) {
                this.letterUpperList.push(this.letterList[i]);
            }
        }
    }

}

/*kliknutí na button generate*/
let generateButtonElement = document.querySelector("#button-generate");

generateButtonElement.addEventListener("click", function() {
    let p1 = new Password(numberOfSymbols);
    console.log(p1);
})









//Generating list of random letters, numbers, symbols
/*
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
*/