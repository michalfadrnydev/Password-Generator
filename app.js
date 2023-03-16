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
//Input samotny - hodnota slideru z inputu
let inputRangeElement = document.querySelector(".input-range");
let passwInputValue = inputRangeElement.value;

//Zobtazení počtu znaků ve spanu
let spanSymbolsNumberElement = document.querySelector("#number-of-symbols");
spanSymbolsNumberElement.innerHTML = passwInputValue;
let totalNumberOfSigns = 0;

inputRangeElement.addEventListener("input", function() {
    passwInputValue = inputRangeElement.value;
    spanSymbolsNumberElement.innerHTML = passwInputValue;
    totalNumberOfSigns = inputRangeElement.value;
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

//---------------------------------------------------PASSWORD GENERETING
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["+", "-", "&", "!", ":","_", "*", "?", ":", "#", "@"];

class Password {
    constructor(totalNumberOfSigns) {
        // Definování počtu symbolů
        this.totalNumberOfSigns = totalNumberOfSigns;
        // Definování statusu indexů
        this.letterLowerAddStatus = checkboxLowerLetterStatus;
        this.numberAddStatus = checkboxNumberStatus;
        this.symbolAddStatus = checkboxSymbolStatus;
        this.letterUpperAddStatus = checkboxUpperLetterStatus;
        //Definování arrays pro znaky
        this.letterLowerList = [];
        this.letterUpperList = [];
        this.numberList = [];
        this.symbolList = [];
        this.letterLowerCount = 0;
        this.letterUpperCount = 0;
        this.numberCount = 0;
        this.symbolCount = 0;
        this.orderedFinalPassword = [];
        this.randomFinalPassword = [];
        this.randomFinalPasswordString = "";
    }
    //STANOVENÍ POČTU ZNAKŮ PRO PISMENA ČÍSLA SYMBOLY
    singleParameterPassword () {
        // UL
        if ( this.letterUpperAddStatus == true) {
            this.letterUpperCount = this.totalNumberOfSigns;
        }
        // LL
        else if ( this.letterLowerAddStatus == true) {
            this.letterLowerCount = this.totalNumberOfSigns;
        }
        // N
        else if ( this.numberAddStatus == true) {
            this.numberCount = this.totalNumberOfSigns;
        }
        // S
        else if ( this.symbolAddStatus == true) {
            this.symbolCount = this.totalNumberOfSigns;
        }
    }
    doubleParameterPassword () {
        // UL & LL
        if (this.letterUpperAddStatus && this.letterLowerAddStatus == true && this.totalNumberOfSigns % 2 == 0) {
            this.letterLowerCount = totalNumberOfSigns / 2;
            this.letterUpperCount = totalNumberOfSigns / 2;
        }
        else if (this.letterUpperAddStatus && this.letterLowerAddStatus == true && this.totalNumberOfSigns % 2 == 1) {
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 2 ) + 1;
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 2 );
        }
        // UL & S
        else if (this.letterUpperAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 2 == 0) {
            this.letterUpperCount = totalNumberOfSigns / 2;
            this.symbolCount = totalNumberOfSigns / 2;
        }
        else if (this.letterUpperAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 2 == 1) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 2 ) + 1;
            this.symbolCount = Math.floor( totalNumberOfSigns / 2 );
        }
        // UL & N
        else if (this.letterUpperAddStatus && this.numberAddStatus == true && this.totalNumberOfSigns % 2 == 0) {
            this.letterUpperCount = totalNumberOfSigns / 2;
            this.numberCount = totalNumberOfSigns / 2;
        }
        else if (this.letterUpperAddStatus && this.numberAddStatus == true && this.totalNumberOfSigns % 2 == 1) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 2 ) + 1;
            this.numberCount = Math.floor( totalNumberOfSigns / 2 );
        }
        //LL & N
        else if (this.letterLowerAddStatus && this.numberAddStatus == true && this.totalNumberOfSigns % 2 == 0) {
            this.letterLowerCount = totalNumberOfSigns / 2;
            this.numberCount = totalNumberOfSigns / 2;
        }
        else if (this.letterLowerAddStatus && this.numberAddStatus == true && this.totalNumberOfSigns % 2 == 1) {
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 2 + 1 );
            this.numberCount = Math.floor( totalNumberOfSigns / 2 );
        }
        //LL & S
        else if (this.letterLowerAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 2 == 0) {
            this.letterLowerCount = totalNumberOfSigns / 2;
            this.symbolCount = totalNumberOfSigns / 2;
        }
        else if (this.letterLowerAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 2 == 1) {
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 2 ) + 1;
            this.symbolCount = Math.floor( totalNumberOfSigns / 2 );
        }
        //N & S
        else if (this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 2 == 0) {
            this.numberCount = totalNumberOfSigns / 2;
            this.symbolCount = totalNumberOfSigns / 2;
        }
        else if (this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 2 == 1) {
            this.numberCount = Math.floor( totalNumberOfSigns / 2 ) + 1;
            this.symbolCount = Math.floor( totalNumberOfSigns / 2 );
        }
    }
    tripleParameterPassword () {
        //UL, LL, N
        if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.numberAddStatus == true && this.totalNumberOfSigns % 3 == 0) {
            this.letterUpperCount = totalNumberOfSigns / 3;
            this.letterLowerCount = totalNumberOfSigns / 3;
            this.numberCount = totalNumberOfSigns / 3;
        }
        else if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.numberAddStatus == true && this.totalNumberOfSigns % 3 == 1) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 3 );
            this.numberCount = Math.floor( totalNumberOfSigns / 3 );
        }
        else if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.numberAddStatus == true && this.totalNumberOfSigns % 3 == 2) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.numberCount = Math.floor( totalNumberOfSigns / 3 );
        }
        //UL, LL, S
        else if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 3 == 0) {
            this.letterUpperCount = totalNumberOfSigns / 3;
            this.letterLowerCount = totalNumberOfSigns / 3;
            this.symbolCount = totalNumberOfSigns / 3;
        }
        else if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 3 == 1) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 3 );
            this.symbolCount = Math.floor( totalNumberOfSigns / 3 );
        }
        else if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 3 == 2) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.symbolCount = Math.floor( totalNumberOfSigns / 3 );
        }
        //UL, N, S
        else if (this.letterUpperAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 3 == 0) {
            this.letterUpperCount = totalNumberOfSigns / 3;
            this.numberCount = totalNumberOfSigns / 3;
            this.symbolCount = totalNumberOfSigns / 3;
        }
        else if (this.letterUpperAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 3 == 1) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.numberCount = Math.floor( totalNumberOfSigns / 3 );
            this.symbolCount = Math.floor( totalNumberOfSigns / 3 );
        }
        else if (this.letterUpperAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 3 == 2) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.numberCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.symbolCount = Math.floor( totalNumberOfSigns / 3 );
        }
        //LL, N, S
        else if (this.letterLowerAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 3 == 0) {
            this.letterLowerCount = totalNumberOfSigns / 3;
            this.numberCount = totalNumberOfSigns / 3;
            this.symbolCount = totalNumberOfSigns / 3;
        }
        else if (this.letterLowerAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 3 == 1) {
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.numberCount = Math.floor( totalNumberOfSigns / 3 );
            this.symbolCount = Math.floor( totalNumberOfSigns / 3 )
        }
        else if (this.letterLowerAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 3 == 2) {
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.numberCount = Math.floor( totalNumberOfSigns / 3 ) + 1;
            this.symbolCount = Math.floor( totalNumberOfSigns / 3 );
        }
    }
    quatroParameterPassword () {
        // UL, LL, N, S
        if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 4 == 0) {
            this.letterUpperCount = totalNumberOfSigns / 4;
            this.letterLowerCount = totalNumberOfSigns / 4;
            this.numberCount = totalNumberOfSigns / 4;
            this.symbolCount = totalNumberOfSigns / 4;
        }
        else if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 4 == 1) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 4 ) + 1;
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 4 );
            this.numberCount = Math.floor( totalNumberOfSigns / 4 );
            this.symbolCount = Math.floor( totalNumberOfSigns / 4 );
        }
        else if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 4 == 2) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 4 ) + 1;
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 4 ) + 1;
            this.numberCount = Math.floor( totalNumberOfSigns / 4 );
            this.symbolCount = Math.floor( totalNumberOfSigns / 4 );
        }
        else if (this.letterUpperAddStatus && this.letterLowerAddStatus && this.numberAddStatus && this.symbolAddStatus == true && this.totalNumberOfSigns % 4 == 3) {
            this.letterUpperCount = Math.floor( totalNumberOfSigns / 4 ) + 1;
            this.letterLowerCount = Math.floor( totalNumberOfSigns / 4 ) + 1;
            this.numberCount = Math.floor( totalNumberOfSigns / 4 ) + 1;
            this.symbolCount = Math.floor( totalNumberOfSigns / 4 );
        }
    }
    appendSignToPassword ( lengthOfList, list ) {
        for ( let i = 0; i < lengthOfList; i++ ) {
            this.orderedFinalPassword.push( list[ Math.floor( Math.random() * ( list.length - 1 )) + 1 ]);
        }
    }
    appendUpperSignToPassword ( lengthOfList, list ) {
        for ( let i = 0; i < lengthOfList; i++ ) {
            this.orderedFinalPassword.push( list[ Math.floor( Math.random() * ( list.length - 1 )) + 1 ].toUpperCase() );
        }
    }
    randomizePassword () {
        while ( this.randomFinalPassword.length != this.totalNumberOfSigns ) {
            let randomIndex = Math.floor( Math.random() *  this.orderedFinalPassword.length );
            this.randomFinalPassword.push( this.orderedFinalPassword[ randomIndex ] );
            this.orderedFinalPassword.splice(randomIndex, 1);
        }
    }
    finalStringPassword () {
        for (let i = 0; i < this.randomFinalPassword.length; i++) {
            this.randomFinalPasswordString += this.randomFinalPassword[i];
        }
    }
}

// Vygenerování hesla kliknutím na button
let generateButtonElement = document.querySelector("#button-generate");
let parameterWarningElement = document.querySelector("#par-warning");
let generatedPassword = document.querySelector(".generated-password");
let p1;

generateButtonElement.addEventListener("click", function () {
    p1 = new Password(passwInputValue);
    console.log(p1);
    //Stanovení počtu zaškrtlých parametrů
    p1.statusCheckboxes = [ p1.letterLowerAddStatus, p1.letterUpperAddStatus, p1.numberAddStatus, p1.symbolAddStatus ];
    p1.statusTrueCheckboxes = [];
    for (let i = 0; i < p1.statusCheckboxes.length; i++ ) {
        if ( p1.statusCheckboxes[i] == true ) {
            p1.statusTrueCheckboxes.push(p1.statusCheckboxes[i])
        }
    }
    p1.statusTrueCheckboxesLength = p1.statusTrueCheckboxes.length
    // Použití funkcí pro stanovení, kolik znaků se má použít
    if (p1.statusTrueCheckboxesLength == 1) {
        p1.singleParameterPassword();
    } else if (p1.statusTrueCheckboxesLength == 2) {
        p1.doubleParameterPassword();
    } else if (p1.statusTrueCheckboxesLength == 3) {
        p1.tripleParameterPassword();
    } else if (p1.statusTrueCheckboxesLength == 4) {
        p1.quatroParameterPassword();
    }
    // Přidání znaků do finálního seřazeného hesla
    p1.appendSignToPassword(p1.letterLowerCount, letters);
    p1.appendUpperSignToPassword(p1.letterUpperCount, letters);
    p1.appendSignToPassword(p1.numberCount, numbers);
    p1.appendSignToPassword(p1.symbolCount, symbols);
    // Vygenerování finálního hesla
    p1.randomizePassword();
    p1.finalStringPassword();
    // DOM navázání na heslo
    if (p1.randomFinalPasswordString.length > 0 && p1.statusCheckboxes.includes(true) == true) {
        generatedPasswordElement.innerHTML = p1.randomFinalPasswordString;
        generatedPassword.classList.add("generated-password-color");
    }
    // Warning Messages
    else if (p1.totalNumberOfSigns == 0 && p1.statusCheckboxes.includes(true) == false) {
        parameterWarningElement.innerHTML = "Character Length & Parameters not defined!"
        parameterWarningElement.classList.remove("no-display");
        setTimeout(() => {
            parameterWarningElement.classList.add("no-display");
        }, "1500")
    } else if (p1.totalNumberOfSigns == 0) {
        parameterWarningElement.innerHTML = "Character Length not defined!"
        parameterWarningElement.classList.remove("no-display");
        setTimeout(() => {
            parameterWarningElement.classList.add("no-display");
        }, "1500")
    } else if (p1.statusCheckboxes.includes(true) == false) {
        parameterWarningElement.innerHTML = "Character Parameters not defined!"
        parameterWarningElement.classList.remove("no-display");
        setTimeout(() => {
            parameterWarningElement.classList.add("no-display");
        }, "1500")
    }
})
