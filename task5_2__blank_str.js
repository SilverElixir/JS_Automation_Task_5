// Task 5.2: to check whether a string is blank or not (string with spaces should be also blank).
function blankOrNot(originalStr){
    console.log(originalStr.includes(" "));
}

blankOrNot(" "); // true
blankOrNot("Viva Cuba!"); // true
blankOrNot("Rorayma"); // false