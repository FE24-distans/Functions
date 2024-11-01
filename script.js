//variabler

let firstName = "Rachel";
const birthday = 25;
const birthdayMonth = "maj";

//concatenation
console.log(
  "Hej, " +
    firstName +
    "!" +
    " Din födelsedag är: " +
    birthday +
    ":e " +
    birthdayMonth
);

//Boolean
let isHappy = true;
console.log(isHappy);

//undefined
let emptyVar;
console.log(emptyVar);

//automatisk typomvandling
const ettNummer = 42;
const result = ettNummer + "1";
console.log(result);

const nummerOchSträng1 = "Mango" + 5 + 5;
const nummerOchSträng2 = 5 + 5 + "Mango";

console.log(nummerOchSträng1);
console.log(nummerOchSträng2);

//Skriv ett program som frågar vad användaren heter och skriver ut...

// let namn = prompt("Vad heter du?");
// console.log("Välkommen " + namn + "!");

//Skriv ett program som hanterar två tal...

// let tal1 = Number(prompt("Ange ett tal: "));
// let tal2 = Number(prompt("Ange ett till tal: "));

// let summa = tal1 + tal2;
// let differens = tal1 - tal2;
// let produkt = tal1 * tal2;

// console.log("Summan är: " + summa);
// console.log("Differensen är: " + differens);
// console.log("Produkten är: " + produkt);

//Skriv ett program som avrundar till ett heltal
let tal = Number(prompt("Ange ett tal: "));

// let helTal = Math.round(tal);
// console.log("Avdrundat till heltal: " + helTal);

//Avdrunda till en decimal
let enDecimal = tal.toFixed(1);
console.log("Avdrundat till en decimal: " + enDecimal);
