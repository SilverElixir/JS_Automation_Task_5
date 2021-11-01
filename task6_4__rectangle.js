// Task 6.4: Write a JavaScript program to calculate the area and
// perimeter of a rectangle. Rectangle should be an object with
// properties width and height and methods getArea() and getPerimeter();

const prompt = require('prompt-sync')({sigint: true});

const w = prompt('Please enter rectangle dimensions. Width: ');
const h = prompt('Now enter rectangle\'s height: ');

let rectangle = {
    width: w,
    height: h,
    getPerimeter() {
      return 2 * (this.width + this.height) }, 
    getArea() {
      return this.width * this.height;
    }
};

console.log("Rectangle's area is : " + rectangle.getArea());
console.log("Rectangle's perimeter is : " + rectangle.getPerimeter());