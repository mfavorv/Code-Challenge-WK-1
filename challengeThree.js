//Prompt the user to input the basic salary and the benefits.
const prompt = require("prompt-sync")({ sigint: true });
const basicSalary = prompt("Enter the basic salary: ");
const benefits = prompt("What is the value of the benefits: ");

//Create a function that calculates the gross salary.
function calculateGrossSalary(basicSalary, benefits) {
  const grossSalary = parseInt(basicSalary) + parseInt(benefits);
  console.log(`The gross salary is ${grossSalary}.`);
  return grossSalary;
}

//Create a function that calculates the PAYE tax
//To access the gross salary, create a variable and store the function with it.
let salary = calculateGrossSalary(basicSalary, benefits);
function calculateTax(salary) {
  if (salary < 24001) {
    let tax = 0.1 * salary;
    console.log(`Tax is ${tax}`);
    return tax;
  } else if (salary < 32334) {
    let tax = 0.25 * salary;
    console.log(`Tax is ${tax}`);
    return tax;
  } else if (salary < 500001) {
    let tax = 0.3 * salary;
    console.log(`Tax is ${tax}`);
    return tax;
  } else if (salary < 800001) {
    let tax = 0.325 * salary;
    console.log(`Tax is ${tax}`);
    return tax;
  } else {
    let tax = 0.35 * salary;
    console.log(`Tax is ${tax}`);
    return tax;
  }
}
//Call the function so that it runs
calculateTax(salary);


//Create a function to calculate NSSF deduction
function calculateDeduction1(salary) {
  let pension = 0.12 * salary;
  let employeeContribution = 0.06 * pension;
  let deduction1 = employeeContribution;
  console.log(`NSSF deduction is ${deduction1}.`);
  return deduction1;
}
//Call the function so that it runs
calculateDeduction1(salary);


//Create a function to calculate NHIF deduction
function calculateDeduction2(salary) {
  if (salary < 6000) {
    let deduction2 = 150;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 8000) {
    let deduction2 = 300;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 12000) {
    let deduction2 = 400;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 15000) {
    let deduction2 = 500;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 20000) {
    let deduction2 = 600;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 25000) {
    let deduction2 = 750;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 30000) {
    let deduction2 = 850;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 35000) {
    let deduction2 = 900;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 40000) {
    let deduction2 = 950;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 45000) {
    let deduction2 = 1000;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 50000) {
    let deduction2 = 1100;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 60000) {
    let deduction2 = 1200;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 70000) {
    let deduction2 = 1300;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 80000) {
    let deduction2 = 1400;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 90000) {
    let deduction2 = 1500;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else if (salary < 100000) {
    let deduction2 = 1600;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  } else {
    let deduction2 = 1700;
    console.log(`NHIF deduction is ${deduction2}`);
    return deduction2;
  }
}
//Call the function so that it runs.
calculateDeduction2(salary);


//Create a function that calculates the net salary
let tax1 = calculateTax(salary);
let deduction =  calculateDeduction1(salary);
let reduction = calculateDeduction2(salary);
function calculateNetSalary(salary, deduction, reduction, tax1){
    let deductions = deduction + reduction + tax1;
    let netSalary = salary - deductions;
    console.log(`Net salary is ${netSalary}`);
    return netSalary;
}
//Call the function so that it runs.
calculateNetSalary(salary, deduction, reduction, tax1)