//The forecast today
const kelvin = 293;

// Celsius = Kelvin - 273
const celsius = kelvin - 273;

// Fahrenheit
let fahrenheit = celsius *(9/5) +32;

// Newton
let newton = celsius *(33/100);


//round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

//round down the newton temperature
newton = Math.floor(newton);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);
