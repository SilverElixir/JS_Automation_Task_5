// Task 6.3: There are two arrays with individual values, write a
// JavaScript program to compute the sum of each individual
// index value from the given arrays and save them to third array
function sumArrays(arr1, arr2) {
    let newArray = [];
    if (arr1.length >= arr2.length) {
        for (i = 0; i < arr1.length; i++) {
            console.log(`arr1[${i}] = ` + arr1[i]);
            console.log(`arr2[${i}] = ` + arr2[i]);
            if (arr2[i] === undefined) {
                arr2[i] = 0;
            }
            newArray.push(arr1[i] + arr2[i]);
        }
    } else {
        for (j = 0; j < arr2.length; j++) {
            console.log(`arr1[${j}] = ` + arr1[j]);
            console.log(`arr2[${j}] = ` + arr2[j]);
            if (arr1[j] === undefined) {
                arr1[j] = 0;
            }
            newArray.push(arr1[j] + arr2[j]);
        }
    }
    return newArray;
};

let array1 = [8,5,6,4,9,10];
let array2 = [80,40,2];
console.log(sumArrays(array1, array2));