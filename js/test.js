


const age = 21;
const type = age >= 18 ? 'adult' : 'child';
console.log(type);




function getNameLength(name) {
  const message = `Name ${name} is  characters long`; // Change this line
    console.log(message)
  return message;
}
getNameLength("Poly")
getNameLength("Harambe")
getNameLength("Billy")
getNameLength("Joe")


function getSubstring(string, length) {
  const substring = `${string.slice(0, length)}`; // Change this line

  // Change this line
    console.log(substring)
    
  return substring;
}

getSubstring('Hello world', 3);
getSubstring('Hello world', 6);
getSubstring('Hello world', 8);
getSubstring('Hello world', 11);
getSubstring('Hello world', 0);

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  
  console.log(message)
  return message;
  // Change code above this line
}
checkPassword('mangohackzor');
checkPassword('polyhax');
checkPassword('jqueryismyjam');

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


function slugify(title) {
  // Change code below this line

  slug = title.toUpperCase().split("").join("-");
  return slug
  console.log(slug);
  // Change code above this line
}
slugify('Arrays for begginers');
slugify('English for developer');
slugify('Ten secrets of JavaScript');
slugify('How to become a JUNIOR developer in TWO WEEKS');


function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  const total = firstArray.concat(secondArray);
  if (total.length > maxLength)
   
  {
    return total.slice(0, maxLength);
  } else if (total.lenght < maxLength) {
    return total.slice();
    
  }

  return total;
  
}

// Change code above this line
makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);


function calculateTotal(number) {
  // Change code below this line
  sum = 0;
  for (let i = 0; i <= number; sum += i++);

  console.log(sum)
  return sum;

 

  // for (let i = 0; i <= number; i += 1 );

  // Change code above this line
}
calculateTotal(1);
calculateTotal(3);
calculateTotal(7);
calculateTotal(18);
calculateTotal(24);
calculateTotal();

a = 2;
b = 4;

result = a + b < 4 ? 'Мало' : 'Много';
console.log(result);


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

login = 'Директор';

let message =
  login == 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : login == ''
    ? 'Нет логина'
        : '';
    
console.log(message)
        

const cart = [51, 32, 3, 45, 55, 77, 1, 3, 12, 65];
let totall = 0;

for (const value of cart) {
console.log(value);
  if (value % 2 === 0) {
    console.log("не чотное");
  }
  totall += value;

 
}
console.log(totall); 


const numbers = [51, 32, 3, 45, 55, 77, 1, 3, 12, 65];
let total = 0;

for (const number of numbers) {
  console.log(number);
  if (number % 2 === 0) {
    console.log('четное!!!');
    total += number;
  }
}