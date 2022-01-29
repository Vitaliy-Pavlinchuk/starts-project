


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

const numbers = [51, 32, 3, 45, 55, 77, 1, 3, 12, 65];
let total = 0;
// перебрать тотал
// перебрать масив
// на каждой инерации проверить на четность
// если чотно плюсуем к тотал

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

// if (numbers[i] % 2 === 0) {
//     console.log('четное!!!');

//     total += numbers[i];
//     }
// }

// console.log('Тотал', total);

for (const number of numbers) {
    console.log(number);
    if (number % 2 === 0) {
        console.log('четное!!!'); 
    total += number;
        
    }
}