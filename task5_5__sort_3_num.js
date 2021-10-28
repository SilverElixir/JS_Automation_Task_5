// Task 4.5:enter two positive numbers and check if 1st number is greater than 2nd one
const prompt = require('prompt-sync')({sigint: true});

const num1 = prompt('Please enter 1st number: ');
const num2 = prompt('Please enter 2nd number: ');
if(num1 > num2){
    console.log("1st number is greater than 2nd one");
}else{
console.log("1st number is less than or equal to 2nd one");
}