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
let numberOfSigns = 0;

inputRangeElement.addEventListener("input", function() {
    passwInputValue = inputRangeElement.value;
    spanSymbolsNumberElement.innerHTML = passwInputValue;
    numberOfSigns = inputRangeElement.value;
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
    constructor(numberOfSigns) {
        // Definování počtu symbolů
        this.numberOfSigns = numberOfSigns;
        // Definování statusu indexů
        this.letterAddStatus = checkboxLowerLetterStatus;
        this.numberAddStatus = checkboxNumberStatus;
        this.symbolAddStatus = checkboxSymbolStatus;
        this.letterUpperAddStatus = checkboxUpperLetterStatus;
        //Definování arrays pro znaky
        this.letterList = [];
        this.numberList = [];
        this.symbolList = [];

        if(this.numberOfSigns === 0) {
            parameterWarningElement.classList.remove("no-display");
            setTimeout(() => {
                parameterWarningElement.classList.add("no-display");
            }, "1500")
        }
    }
    
    //STANOVENÍ POČTU ZNAKŮ PRO PISMENA ČÍSLA SYMBOLY
    singleParameterPassword () {

    }
    
    doubleParameterPassword () {
        // UL & LL
        if (this.letterUpperAddStatus && this.letterAddStatus === true && this.numberOfSigns % 2 === 0) {
            this.letterCount = numberOfSigns / 2;
            this.letterUpperCount = numberOfSigns / 2;
        }
        else if (this.letterUpperAddStatus && this.letterAddStatus === true && this.numberOfSigns % 2 === 1) {
            this.letterCount = numberOfSigns / 2 + 1;
            this.letterUpperCount = numberOfSigns / 2;
        }
        // UL & S
        else if (this.letterUpperAddStatus && this.symbolAddStatus === true && this.numberOfSigns % 2 === 0) {
            this.letterUpperCount = numberOfSigns / 2;
            this.symbolCount = numberOfSigns / 2;
        }
        else if (this.letterUpperAddStatus && this.symbolAddStatus === true && this.numberOfSigns % 2 === 1) {
            this.letterUpperCount = numberOfSigns / 2 + 1;
            this.symbolCount = numberOfSigns / 2;
        }
        // UL & N
        else if (this.letterUpperAddStatus && this.numberAddStatus === true && this.numberOfSigns % 2 === 0) {
            this.letterUpperCount = numberOfSigns / 2;
            this.numberCount = numberOfSigns / 2;
        }
        else if (this.letterUpperAddStatus && this.numberAddStatus === true && this.numberOfSigns % 2 === 1) {
            this.letterUpperCount = numberOfSigns / 2 + 1;
            this.numberCount = numberOfSigns / 2;
        }
        //LL & N
        else if (this.letterAddStatus && this.numberAddStatus === true && this.numberOfSigns % 2 === 0) {
            this.letterCount = numberOfSigns / 2;
            this.numberCount = numberOfSigns / 2;
        }
        else if (this.letterAddStatus && this.numberAddStatus === true && this.numberOfSigns % 2 === 1) {
            this.letterCount = numberOfSigns / 2 + 1;
            this.numberCount = numberOfSigns / 2;
        }
        //LL & S
        else if (this.letterAddStatus && this.symbolAddStatus === true && this.numberOfSigns % 2 === 0) {
            this.letterCount = numberOfSigns / 2;
            this.symbolCount = numberOfSigns / 2;
        }
        else if (this.letterAddStatus && this.symbolAddStatus === true && this.numberOfSigns % 2 === 1) {
            this.letterCount = numberOfSigns / 2 + 1;
            this.symbolCount = numberOfSigns / 2;
        }
        //N & S
        else if (this.numberAddStatus && this.symbolAddStatus === true && this.numberOfSigns % 2 === 0) {
            this.numberCount = numberOfSigns / 2;
            this.symbolCount = numberOfSigns / 2;
        }
        else if (this.numberAddStatus && this.symbolAddStatus === true && this.numberOfSigns % 2 === 1) {
            this.numberCount = numberOfSigns / 2 + 1;
            this.symbolCount = numberOfSigns / 2;
        }

    tripleParameterPassword () {
        //UL, LL, N
        //UL, LL, S
        //UL, N, S
        //LL, N, S
    }
    quatroParameterPassword () {
        // UL, LL, N, S
    }
} 

    /*
    //Stanovení počtu znaků na pro jednotlivé arrays na základě inputu
    if (this.numberOfSigns % 3 === 0) {
        this.letterCount = numberOfSigns / 3;
        this.numberCount = numberOfSigns / 3;
        this.symbolCount = numberOfSigns / 3;
    } else if (this.numberOfSigns % 3 === 1) {
        this.letterCount = Math.floor(numberOfSigns / 3) + 1;
        this.numberCount = Math.floor(numberOfSigns / 3);
        this.symbolCount = Math.floor(numberOfSigns / 3);
    } else if (this.numberOfSigns % 3 === 2) {
        this.letterCount = Math.floor(numberOfSigns / 3) + 1;
        this.numberCount = Math.floor(numberOfSigns / 3) + 1;
        this.symbolCount = Math.floor(numberOfSigns / 3);
    };
    */

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

/*kliknutí na button generate*/
let generateButtonElement = document.querySelector("#button-generate");

generateButtonElement.addEventListener("click", function() {
    let p1 = new Password(numberOfSigns);
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