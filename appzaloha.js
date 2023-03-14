/*Přiřadím do finalniho array všechny pismena*/
let finalPassword = [];

let finalPasswordString = "";

while (newPasswordLetters.length!=0 && newPasswordNumbers.length != 0 && newPasswordSymbols.length != 0) {
    /*Vygeneruju nahodny index pro finální array, kam se bude vkladat číslo
    Vygeneruje nahodny index pro číslo, které beru ze seznamu čísel
    Přiřadím číslo do final array
    Odeberu toto číslo z array*/


    /* tady musim pridat IF podminku: POKUD je ten seznam znaku vycerpany, tak už neprovádět tento krok*/
    if (newPasswordLetters.length!=0) {
        let indexOfSignInNewPasswLetter = Math.floor( Math.random() * finalPassword.length ) + 1;
        let indexOfSignFromLetterList = Math.floor( Math.random() * newPasswordLetters.length );
        /*TADY MUSÍM MÍT ASI JEN PUSH */
        finalPassword.splice(indexOfSignInNewPasswLetter, 0, newPasswordLetters[ indexOfSignFromLetterList ]);
        newPasswordLetters.splice(indexOfSignFromLetterList, 1);
    }
    
    if (newPasswordNumbers.length != 0) {
        let indexOfSignInNewPasswNumb = Math.floor( Math.random() * finalPassword.length ) + 1;
        let indexOfSignFromNumbList = Math.floor( Math.random() * newPasswordNumbers.length );
        finalPassword.splice(indexOfSignInNewPasswNumb, 0, newPasswordNumbers[indexOfSignFromNumbList ]);
        newPasswordNumbers.splice(indexOfSignFromNumbList, 1);
    }

    if (newPasswordSymbols.length != 0) {
        let indexOfSignInNewPasswSymb = Math.floor( Math.random() * finalPassword.length ) + 1;
        let indexOfSignFromSymbList = Math.floor( Math.random() * newPasswordSymbols.length );
        finalPassword.splice(indexOfSignInNewPasswSymb, 0, newPasswordSymbols[indexOfSignFromSymbList ]);
        newPasswordSymbols.splice(indexOfSignFromSymbList, 1);
    }
}

for (let i = 0; i < finalPassword.length; i++) {
        finalPasswordString += finalPassword[i];
    };

console.log(finalPassword);
console.log(finalPasswordString);


/*----------------------------------------------------------------*/


let letterLowerCount = 4;
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
let addSignsToList = function (pickingList, totalNumberOfSigns, addingList) {
    for (let i = 0; i < totalNumberOfSigns; i++) {
        addingList.push(pickingList[randListIndex(pickingList)]);
    }
}

//Generating list of random letters, numbers, symbols
addSignsToList(letters, letterLowerCount, newPasswordLetters);
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


/*---------------------------------------------------------*/

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["+", "-", "&", "!", ":","_", "*", "?", ":", "#", "@"];

let parameterWarningElement = document.querySelector("#par-warning");

class Password{
    constructor(totalNumberOfSigns) {
        // Definování počtu symbolů
        this.totalNumberOfSigns = totalNumberOfSigns;
        // Definování statusu indexů
        this.letterLowerAddStatus = checkboxLowerLetterStatus;
        this.numberAddStatus = checkboxNumberStatus;
        this.symbolAddStatus = checkboxSymbolStatus;
        this.letterUpperAddStatus = checkboxUpperLetterStatus;
        //Definování arrays pro znaky
        this.letterList = [];
        this.numberList = [];
        this.symbolList = [];

        if(this.totalNumberOfSigns === 0) {
            parameterWarningElement.classList.remove("no-display");
            setTimeout(() => {
                parameterWarningElement.classList.add("no-display");
            }, "1500")
        }
        
        //Stanovení počtu znaků na pro jednotlivé arrays na základě inputu
        else if (this.totalNumberOfSigns % 3 === 0) {
            this.letterLowerCount = totalNumberOfSigns / 3;
            this.numberCount = totalNumberOfSigns / 3;
            this.symbolCount = totalNumberOfSigns / 3;
        } else if (this.totalNumberOfSigns % 3 === 1) {
            this.letterLowerCount = Math.floor(totalNumberOfSigns / 3) + 1;
            this.numberCount = Math.floor(totalNumberOfSigns / 3);
            this.symbolCount = Math.floor(totalNumberOfSigns / 3);
        } else if (this.totalNumberOfSigns % 3 === 2) {
            this.letterLowerCount = Math.floor(totalNumberOfSigns / 3) + 1;
            this.numberCount = Math.floor(totalNumberOfSigns / 3) + 1;
            this.symbolCount = Math.floor(totalNumberOfSigns / 3);
        };

        // Funkce pro výběr náhodných znaků na základě počtu znaků
        let randListIndex = function ( list ) {
            let randIndex = Math.floor(Math.random()*(list.length - 1)) + 1;
            return randIndex;
        }
        let addSignsToList = function (pickingList, totalNumberOfSigns, addingList) {
            for (let i = 0; i < totalNumberOfSigns; i++) {
                addingList.push(pickingList[randListIndex(pickingList)]);
            }
        }
        
        // Přidání náhodně vybraných znaků do prázdných array
        addSignsToList(letters, this.letterLowerCount, this.letterList);
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
    let p1 = new Password(totalNumberOfSigns);
    console.log(p1);
})