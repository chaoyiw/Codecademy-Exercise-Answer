// my age
const myAge = 27;

// years
let earlyYears = 2;

earlyYears *= 10.5;

//since we already accounted for the first 2 years
let laterYears = myAge - 2;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// add years together
let myAgeInDogYears = earlyYears + laterYears;

let myName = "Chaoyi";

// let my name be lowercase
myName = myName.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
