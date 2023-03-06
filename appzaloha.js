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
