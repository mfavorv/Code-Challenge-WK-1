# Code-Challenge Week One
 - Challenge 1: Student Grade Generator
 - Challenge 2: Speed Detector 
 - Challenge 3: Net Salary Calculator


## Challenge 1: Student Grade Generator
### Description
- It is  a program that prompts the user to input student marks.   The input should be between 0 and 100. Then output the correct grade: 
A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

### User prompts
- Prompt the user to input the marks that will be used in assignment of grades. The prompt specifies to the user that the input should be between 0 and 100.

### Grade assigner
- The function that takes in the marks and assigns them grades using the if...else if...else statement. 

- It assigns a grade of A to marks above 79, B to marks between 60 and 79, C to marks between 49 and 59, D to marks between 40 and 49 and E to marks less than 40.

- The function is called so that it can run. 



## Challenge 2: Speed Detector 
### Description
- It is a program that takes as input the speed of a car e.g 80.
 If the speed is less than 70, it should print “Ok”. 
 Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

### User prompts
-It prompts the user to enter the car speed so as to determine the output.    

### Determining the output
- It takes the speed input as an argument in the function and uses the if...then...else to determine output. If the speed is less than or equal to 70, then it should console.log("Ok"). If the speed is graeter than 70, the function determines by how much the speed is greater than 70 and divides the result by 5. The result of the division is the number of demerits given.

- If the demerits are greater than twelve, the license should be suspended.
 
- The function is called so that it can run. 

## Challenge 3: Net Salary Calculator
### Description
 It is a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

### User prompts
- It prompts the user to input their basic salary and benefits. 

### Calculating gross salary
- Using the basic salary and the benefits, the gross salary is calculated. The basic salary is added to the benefits to get the gross salary.
 
-The function is made to run by calling it.

### Calculating the PAYE tax
- The gross salary is accessed by creating a variable that holds the function used to calculate gross salary.
  
- Using the gross salary as the taxable income, the function determines which tax band is appropriate and assigns the tax calculated to the variable called tax.
If the salary is < 24001, the tax is calculated by multiplying 0.1 by the salary.
If the salary is < 32334 and > 24000, the tax is calculated by multiplying 0.25 by the salary.
If the salary is < 500001 and > 32333, the tax is calculated by multiplying 0.3 by the salary.
If the salary is < 800001 and > 500000, the tax is calculated by multiplying 0.325 by the salary.
If the salary is > 80000, the tax is calculated by multiplying 0.35 by the salary.

- The function is then called so that it could run.
 

### Calculating NSSF deductions
- The pension is 12% of the gross salary. Hence, we use a variable to store the value of the pension.
- The employee's contribution is 6% , another variable is created to store this value.
- The employee's contribution is equal to the deduction.
- The deduction is taken as the final value of NSSF deductions.

- The function is called so that it runs.

### Calculating NHIF deductions
- The function calculates NHIF deduction based on the gross salary. 
- If the salary is < 6000, the deduction is 150.
- If the salary is > 6000 and < 8000, the deduction is 300.
- If the salary is > 8000 and < 12000, the deduction is 400.
- If the salary is > 12000 and < 15000 the deduction is 500.
- If the salary is > 15000 and < 20000, the deduction is 600.
- If the salary is > 20000 and < 25000, the deduction is 750.
- If the salary is > 25000 and < 30000, the deduction is 850.
- If the salary is > 30000 and < 35000, the deduction is 900.
- If the salary is > 35000 and < 40000, the deduction is 950.
- If the salary is > 40000 and < 45000, the deduction is 1000.
- If the salary is > 45000 and < 50000, the deduction is 1100.
- If the salary is > 50000 and < 60000, the deduction is 1200.
- If the salary is > 60000 and < 70000, the deduction is 1300.
- If the salary is > 70000 and < 80000, the deduction is 1400.
- If the salary is > 80000 and < 90000, the deduction is 1500.
- If the salary is > 90000 and < 100000, the deduction is 1600.
- If the salary is > 100000, the deduction is 1700.

- The function is called so that it runs.

### Calculating the Net salary
- The net salary is calculated by deducting the tax, NSSF deductions and NHIF deductions from the gross salary.

- The function is called to run.


## Author and License
MIT license. The author is Favor Vincent.