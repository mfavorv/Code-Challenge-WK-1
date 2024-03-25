//Prompt the user to enter marks used in grade generation

const prompt = require("prompt-sync")({ sigint: true });
const marks = prompt("Enter your marks(Should be between 0 and 100.): ");

//Assign grades to the marks that were input.

function generateGrades(marks) {
  if (marks > 79) {
    console.log ("Grade = A");
    return "Grade = A";
  } else if (marks >= 60){
    console.log ("Grade = B");
    return "Grade = B";
  } else if (marks >= 49) {
    console.log ("Grade = C");
    return "Grade = C";
  } else if (marks >= 40) {
    console.log ("Grade = D");
    return "Grade = D";
  } else {
    console.log ("Grade = E");
    return "Grade = E";
  }
}

//Call the function so that it runs.
generateGrades(marks);