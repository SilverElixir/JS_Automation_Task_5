// Task 5.5: Write a JavaScript function with conditional statement to sort
// three numbers
function sort3num(a,b,c){
    if (a > b && a > c) {
      if (b > c) {
          return a + ", " + b + ", " + c;
      } else {
          return a + ", " + c + ", " + b;
      }
    } else if (b > a && b > c) {
      if (a > c) {
          return b + ", " + a + ", " + c;
      } else {
          return b + ", " + c + ", " + a;
      }
    } else if (c > a && c > b) {
      if (a > b) {
          return c + ", " + a + ", " + b;
      } else {
          return c + ", " + b + ", " + a;
      }
    }
  }
  
  console.log(sort3num(19,4,21)); // 21, 19, 4
  console.log(sort3num(-10,42,26)); // 42, 26, -10
  console.log(sort3num(5,6,7)); // 7, 6, 5