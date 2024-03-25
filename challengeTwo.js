//Prompt the user to input the car speed.

const prompt = require("prompt-sync")({ sigint: true });
const speed = prompt("Enter speed of the car: ");

//Determine the output based on the speed input.

function speedDetector(speed){
    if(speed <= 70){
        console.log("Ok");
    }else {
        let aboveLimit = speed - 70;
        let penalty = aboveLimit / 5;
        let demerits = penalty;
        console.log (demerits);
        return demerits
    }

    //Suspend license if demerits are greater than 12
    
    if(demerits > 12){
        console.log("License suspended");
    }
}

//Call the function so that it runs.
speedDetector(speed);