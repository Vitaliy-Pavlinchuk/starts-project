//2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';

// }
//3
// function checkStorage(available, ordered) {
  // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';

// }
//4

// const fruits = ["apple", "plum", "pear", "orange"]
//5
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// // Change code below this line
// console.log(firstElement);
//6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana"
// Write your code under this line

//8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line
//9
// // function getExtremeElements(array) {
// //   // Change code below this line
// //   return [array[0], array[array.length - 1]];

//   // Change code above this line
// }

//10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// splitMessage('Mango hurries to the train', ' ');
// splitMessage('Mango', '');
// splitMessage('best_for_week', '_');

// //11
//  return message.split(' ').length * pricePerWord;

//13
function slugify(title) {
 
//   const slug = title.toLowerCase().split(' ').join('-');
//   return slug;

}

//15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
//16
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const total = firstArray.concat(secondArray);
//   if (total.length > maxLength) {
//     return total.slice(0, maxLength);
//   } else if (total.lenght < maxLength) {
//     return total.slice();
//   }

//   return total;
// }

//17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

//18
// function calculateTotal(number) {
//  // Change code below this line
// let total = 0;

// for (let  i = 0; i <= number; i += 1 ){
// total += i}

// return total
//19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
//20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const orders of order) total += orders;
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
 
//21
// function findLongestWord(string) {
//   // Change code below this line

//   let bigestWord = string.split(' ')[0];
//   for (const argument of string.split(' ')) {
//     if (argument.length > bigestWord.length) {
//       bigestWord = argument;
//     }
//   }
//   console.log(arguments);
//   return bigestWord;
// }

//22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (var i = min; i <= max; i++) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
//23
// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArr = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr; // Change code above this line
// }

//24
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }
// checkFruit('plum');
// checkFruit('mandarin');
// checkFruit('pear');
// checkFruit('Pear');
// checkFruit('apple');
//25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let common = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       common.push(array1[i]);
//     }
//   }
//   return common;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);
//26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const orders of order) {
//     total += orders;
//   }

//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

//27
function filterArray(numbers, value) {
  // Change code below this line

  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
//28
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;
//29
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const totals = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) totals.push(i);
//   }
//   return totals;
// }
// // Change code above this line
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);
//30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

//31
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }

//   return number;
  // Change code above this line
// }

//32
// function includes(array, value) {
//   // Change code below this line
//   for (const arrays of array) {
//     if (arrays === value) {
//       return true;
//     }
//   }
//   return false;
// }


