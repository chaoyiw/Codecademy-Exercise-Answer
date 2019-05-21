//number between 0-1 * 1000
let raceNumber = Math.floor(Math.random() * 1000);

let early = false;

let age = 27;

if (early && age > 18){
  	raceNumber += 1000;
    };



if (early && age > 18){	
  	console.log(`Race number is ${raceNumber}, it will start at 9:30 am.`)
    }else if(!early && age > 18){
      console.log(`Race number is ${raceNumber}, late adults run at 11:00 am.`)
    }else if(age < 18){

    };
