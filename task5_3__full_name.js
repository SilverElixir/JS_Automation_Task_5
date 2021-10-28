// Task 5.3: write a JavaScript function to convert a string in abbreviated
// form. console.log(abbrev ("Name Surname")) – should be
// "N.S." (should convert lower case names to upper)
function abbrev(fullName){
    const nameArr = fullName.split(" ");
    if (nameArr.length === 2) {
        return nameArr[0].charAt(0).toUpperCase() + ". " 
            + nameArr[1].charAt(0).toUpperCase() + ".";
     }
     else{
         return "OOPS! Given text is in a wrong format. \nPlease provide text as `Name Surname` format";
     }
}

console.log(abbrev("Angelina Jolie")); // A. J. 
console.log(abbrev("timothee chalamet")); // T. C.
console.log(abbrev("Zendaya")); // error msg
