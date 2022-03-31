/////4.1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza()
// const pointer =  makePizza ;

/////4.2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage('Royal Grand', makePizza);
// makeMessage('Ultracheese', deliverPizza);

/////4.3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

/////4.4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

/////4.5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   // Change code above this line
// console.log(totalPrice);
// }

// calculateTotalPrice([12, 85, 37, 4]);

/////4.6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (item) {
//     if (item > value) filteredNumbers.push(item);
//   });

//   // Change code above this line
//   console.log(filteredNumbers) ;
// }

// filterArray([1, 2, 3, 4, 5], 3);

/////4.7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (firstArray) {
//     if (secondArray.includes(firstArray)) commonElements.push(firstArray);
//   });

//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

///////4.8

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };

////4.9

// const calculateTotalPrice = (quantity, pricePerItem) =>
//    quantity * pricePerItem;
// ;



// /////4.10
// const calculateTotalPrice = (Arra) => {
//     let total = 0;

//     Arra.forEach(element => {
//         total += element;
//     });
//     console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);


//////4.1
// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

/////4.12
// const getCommonElements = (arr, value) => {
//     let total = [];

//     arr.forEach((element => {
//         if (value.includes(element)) {
//             total.push(element);
//         }
           
        
//     }));
//     console.log(total);
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);


/////4.13
// function changeEven(numbers, value) {
//   // Change code below this line
//   const commonElements = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       commonElements.push(number + value);
//     } else {
//       commonElements.push(number);
//     }
//   });

//   // Change code above this line
//   return commonElements;

//   // Change code above this line
// }
// changeEven([1, 2, 3, 4, 5], 10);

/////4.14
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
////4.15
// const titles = books.map(book => book.title);

////4.16
// const genres = books.flatMap(book => book.genres);
// /////4.17
//  const getUserNames = users => {
//    return users.map(user => user.name);
//  };


////4.18
// Change code below this line
// const getUserEmails = users => {
    
//     return users.map(user => user.email)

//   };

////4.19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter((element => element % 2 === 0));
// const oddNumbers = numbers.filter((elem => elem % 2 !== 0 ));


  // Change code above this line
/////4.20
// const allGenres = books.flatMap(allGenre => allGenre.genres);
// const uniqueGenres = allGenres.filter(
//   (course, index, array) => array.indexOf(course) === index
// );;

/////4.21
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author == AUTHOR);

/////4.22
// const getUsersWithEyeColor = (users, color) =>{

// return users.filter(user => user.eyeColor === color);

/////4.23
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age > minAge && user.age < maxAge);
// };
/////4.24
// // const getUsersWithFriend = (users, friendName) =>

// //    users.filter(user => user.friends.includes(friendName) )
// ;


/////4.25
// const getFriends = users =>
//  users
//     .flatMap(user => user.friends)
//     .filter((course, index, array) => array.indexOf(course) === index);

/////4.26
// const getActiveUsers = (users) => users.filter(user => user.isActive )
   
// ;

///4.27
// const getInactiveUsers = (users) => users.filter(user => user.isActive === !true)
   
//     ;

// ///4.28
// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

////4.29
// const getUserWithEmail = (users, email) =>
// users.find(user => user.email === email)
// ;


/////4.30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);


/////4.31
// const isEveryUserActive = users => users.every(user => user.isActive);

///4.33
// const isAnyUserActive = users => users.some(user => user.isActive);

// /////4.34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, values) => {
//   return acc + values;
// }, 0);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
/////4.
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]


// const totalPlayTime = playtimes.reduce((acc, values) => {
//   return acc + values;
// }, 0);

// console.log(totalPlayTime);

// /////4.35
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);
/////4.36
// const calculateTotalBalance = users =>
//   users.reduce((acc, total) => {
//     return acc + total.balance;
//   }, 0);
/////4.37
// const getTotalFriendCount = users =>
//   users.reduce((total, user) => {
//     return total + user.friends.length;
//   }, 0);

////4.38
// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

//////4.39
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

///4.40
// const authorsInAlphabetOrder = [... authors].sort((a, b) => a.localeCompare(b))

// const authorsInReversedOrder = [...authors].sort((a , b) => b.localeCompare(a)
///4.41
// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


/////4.44
// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
/////4.45
// const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
/////4.46
// const getNamesSortedByFriendCount = users =>
//   [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
/////4.47
// const getSortedFriends = users =>
//   [...users]
//     .flatMap(user => user.friends)
//     .filter((course, index, array) => array.indexOf(course) === index)
//     .sort((a, b) => a.localeCompare(b));
/////4.48
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => {
//       return total + user.balance;
//     }, 0);
// };
