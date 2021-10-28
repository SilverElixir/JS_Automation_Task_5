// Task 5_1:  Write a JavaScript function to check if given string includes
// given symbol.

// ECMAScript 6 introduced String.prototype.includes:
function includesOrNot(originalStr, expectedSymbol){
  console.log(originalStr.includes(expectedSymbol)); 
}

includesOrNot("Hello", "o");
includesOrNot("Moloko", "a");
