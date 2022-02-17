


const age = 21;
const type = age >= 18 ? 'adult' : 'child';
console.log(type);


let a = 10;
let b = 2;
total = a + b;
console.log(total);

function includes(array, value) {
  // Change code below this line
  for (const arrays of array) {
    if (arrays == value) {
      return true;
    } else {
      return false;
    }
  }
}
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus');
includes(['apple', 'plum', 'pear', 'orange'], 'plum');
includes(['apple', 'plum', 'pear', 'orange'], 'kiwi');






// Change code below this line

// function includes(array, value) {
//   // Change code below this line
//   for (const arrays of array) {
//     if (arrays == value) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
 



// function getNameLength(name) {
//   const message = `Name ${name} is  characters long`; // Change this line
//     console.log(message)
//   return message;
// }
// getNameLength("Poly")
// getNameLength("Harambe")
// getNameLength("Billy")
// getNameLength("Joe")


// function getSubstring(string, length) {
//   const substring = `${string.slice(0, length)}`; // Change this line

//   // Change this line
//     console.log(substring)
    
//   return substring;
// }

// getSubstring('Hello world', 3);
// getSubstring('Hello world', 6);
// getSubstring('Hello world', 8);
// getSubstring('Hello world', 11);
// getSubstring('Hello world', 0);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

  
//   console.log(message)
//   return message;
//   // Change code above this line
// }
// checkPassword('mangohackzor');
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// const cart = [51, 32, 3, 45, 55, 77, 1];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1){
    
//     total = total + cart[i];
// }


// console.log(total)


// const cart = [51, 32, 3, 45, 55, 77, 1, 3, 12, 65];
// let total = 0;

// for (const value of cart) {
//     total += value;
//     console.log(total)
// }

// НАЙТИ ВСЕ ЧОТНЬІЕ

// const numbers = [51, 32, 3, 45, 55, 77, 1, 3, 12, 65];
// let total = 0;


// for (const number of numbers) {
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log('четное!!!'); 
//     total += number;
        
//     }
// }


// function slugify(title) {
//   // Change code below this line

//   slug = title.toUpperCase().split("").join("-");
//   return slug
//   console.log(slug);
//   // Change code above this line
// }
// slugify('Arrays for begginers');
// slugify('English for developer');
// slugify('Ten secrets of JavaScript');
// slugify('How to become a JUNIOR developer in TWO WEEKS');


// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const total = firstArray.concat(secondArray);
//   if (total.length > maxLength)
   
//   {
//     return total.slice(0, maxLength);
//   } else if (total.lenght < maxLength) {
//     return total.slice();
    
//   }

//   return total;
  
// }

// // Change code above this line
// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);


// a = 2;
// b = 4;

// result = a + b < 4 ? 'Мало' : 'Много';
// console.log(result);


// let message;
// login ="Директор";
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// console.log(message)

// login = 'Директор';

// let message =
//   login == 'Сотрудник'
//     ? 'Привет'
//     : login == 'Директор'
//     ? 'Здравствуйте'
//     : login == ''
//     ? 'Нет логина'
//         : '';
    
// console.log(message)
        

// const cart = [51, 32, 3, 45, 55, 77, 1, 3, 12, 65];
// let totall = 0;

// for (const value of cart) {
// console.log(value);
//   if (value % 2 === 0) {
//     console.log("не чотное");
//   }
//   totall += value;

 
// }
// console.log(totall); 


// const numbers = [51, 32, 3, 45, 55, 77, 1, 3, 12, 65];
// let total = 0;

// for (const number of numbers) {
//   console.log(number);
//   if (number % 2 === 0) {
//     console.log('четноеfffff!!!');
//     total += number;
//   }
// }

// //2-19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }



//2-21
// function findLongestWord(str) {
//   // Change code below this line

//   return str.split(' ').reduce((a, b) => (b.length > a.length ? b : a));
// }

// console.log(findLongestWord);

// // Change code above this line
// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');



// function findLongestWord(string) {
//   // Change code below this line

//   let bigestWord = string.split(' ')[0];
//   for (const argument of string.split(' ')) {
//     if (argument.length > bigestWord.length) {
//       bigestWord = argument;
//     }
//   }
  
//   return bigestWord;
// }

// // Change code above this line
// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');

// 2/22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//     numbers.push(66);
//   }
//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);







 

// const cartss1 = [51, 32, 3, 45, 55, 77, 11];
// let totalssа = 0;

// for (let i = 0; i < cartss1.length; i += 1){
    
//     totalssа = totalssа + cartss1[i];
// }


// console.log(totalssа)


// const cartss = [51, 32, 3, 45, 55, 77, 1];
// let totalss = 0;

// for (const value of cartss) {
//   totalss += value;
// }
// console.log('Total:', totalss)




//  login['334'];

// const findLogin = function (allogins, password) {
//   return allogins.includes(password)
//     ? `user ${password} find`
//     : `user ${password} not find`;
// }



// console.log(findLogin('login', '334' ));
// console.log(findLogin('login', '443q32'));
// console.log(findLogin('login', '42q4q24'));
// console.log(findLogin('login', '42q4q24'));

//2-25
function getCommonElements(array1, array2) {
  // Change code below this line
  let common = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      common.push(array1[i]);
    }
  }
  return common;
  // Change code above this line
}
getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
getCommonElements([1, 2, 3], [10, 20, 30]);
