/**
 * TASK 1:
 * function VolumeCube(arg) {
  return arg ** 3;
}

console.log(VolumeCube(5));
 * 
 *  TAsK 2:
 * const text = prompt("Matn kiriting:");
const symbol = prompt("Belgi kiriting:");

function FindSymbol(text, symbol) {
  const text1 = text.split("");
  let count = 0;

  for (let i = 0; i < text1.length; i++) {
    const element = text1[i];
    if (element === symbol) {
      count = count + 1;
    }
  }
  console.log("Siz kiritgan matnda", symbol, count, "ta");
}

FindSymbol(text, symbol);

 * 
 *    task 3:
 *  let arr = [
  45,
  null,
  12,
  "null",
  5,
  false,
  "34",
  7,
  true,
  undefined,
  NaN,
  "if",
  45,
];

function FirstDigit(arr) {
  let numberAdd = 0;
  for (let i = 0; i < arr.reverse().length; i++) {
    const element = arr[i];

    if (typeof element == "number" && !isNaN(element)) {
      numberAdd = element;
    }
  }
  console.log(numberAdd);
}

FirstDigit(arr);
 * 
     TASK 4:

 * let number = prompt("Enter you to enter a number");

function AddNumber(number) {
  AddNumber = 0;
  number = number.toString().split("");
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    AddNumber += element * 1;
  }
  console.log(AddNumber);
}

AddNumber(number);
 * 
 * TASK 5:
 * function LeapYear(arg) {
  if ((arg % 4 == 0 && arg % 100 != 0) || arg % 400 == 0) {
    return "It is a LeapYear";
  } else {
    return "It is not a LeapYear";
  }
}

console.log(LeapYear(2024));
 * 
   TASK 6;
const max = prompt("Enter a number 1") * 1;
const min = prompt("Enter a number 2") * 1;

function RandomNumber(num1, num2) {
  let RanNum = 0;
  if (num1 > num2) {
    RanNum = Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
  } else {
    RanNum = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  }

  console.log(RanNum);
}

RandomNumber(max, min);





   TASK 7:
   let width = prompt("To'rtburchakning enini kiriting:");
let height = prompt("To'rtburchakning bo'yini kiriting:");

function Area(width, height) {
  console.log(height * width);
}

Area(width, height);




   TAsk 9:
   let a = 3;
let b = 4;
let c = 5;

function Triangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      console.log("This Triangle is equilateral");
    } else if (a === b || b === c || a === c) {
      console.log("This Triangle is equivalent");
    } else if (
      a ** 2 + b ** 2 === c ** 2 ||
      a ** 2 + c ** 2 === b ** 2 ||
      b ** 2 + c ** 2 === a ** 2
    ) {
      console.log("This Triangle is rectangular");
    }
  }
}

Triangle(a, b, c);

task 10:
let num1 = 0;
let num2 = 4;
function MinDigit(arg1, arg2) {
  let min = 0;
  if (arg1 < arg2) {
    min = arg1;
  } else {
    min = arg2;
  }
  return min;
}

console.log(MinDigit(2, 4));
  
TASK 11:

const Radius = 5;
function AreaCircle(arg) {
  return Math.PI * arg ** 2;
}

console.log(AreaCircle(5));

  TASK 12:
  const Radius = 5;
const height = 13;
function VolumeCylinder(r, h) {
  const Volume = Math.PI * r ** 2 * h;

  return Volume;
}

console.log(VolumeCylinder(2, 9));

  Task 16:


  const a = 5;
const b = 13;
const c = 13;
function PerimeterTriangle(a, b, c) {
  const Perimeter = a + b + c;
  return Perimeter;
}

console.log(PerimeterTriangle(2, 9, 8));

  Task 19:
  const Radius = 5;
const height = 10;

function VolumeCone(r, h) {
  const Volume = (1 / 3) * Math.PI * r ** 2 * h;
  return Volume;
}
console.log(VolumeCone(2, 9));


 */

// let text = prompt("Please enter a text");
// function Symbol(arg1, arg2) {

// }

// function add(a, b, callback) {
//   console.log(a + b);
//   callback();
// }

// function display() {
//   console.log("calback function ichi");
// }

// add(4, 5, display);
