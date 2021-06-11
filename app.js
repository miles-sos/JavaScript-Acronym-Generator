/*
Write a program in JavaScript that collects a long name or phrase from the user and converts it to its acronym. For example if I enter Portable Network Graphics into your program I should get back its acronym - PNG
*/

let inputPhrase = prompt('ENTER ANY WORD or PHRASE');

if(inputPhrase){
    if(inputPhrase.includes(" ") === false){
        let getChar = inputPhrase.charAt(0).toUpperCase();
        console.log(getChar);
    }else{
        let splitedPhrase = inputPhrase.split(" ");
        const acronym = splitedPhrase.map(function(getEachChar){ return getEachChar[0];}).join('.').toUpperCase();
        console.log(acronym);
    }    
}else{console.log('A value is required');}


