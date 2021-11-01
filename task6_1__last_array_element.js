// Task 6.1: . Write a JavaScript function to get the last element of an
// array
function getLastArrayElement(array){
    return array[array.length - 1];
}

let arr1 = [2,3,16];
console.log(getLastArrayElement(arr1)); // 16

let arr2 = [8,81,-17,21,-15];
console.log(getLastArrayElement(arr2)); // -15