const Car = function ({ brand, modal, price, maxSpeed } = {}) {
  
  //2- Функция вьізьіваетса в контексте созданого обекта , то есть
  // в This затисуетса сьілка не него.(на пустой обект)
  // console.log(this);

  this.position = brand;
  this.modal = modal;
  this.price = price;
 this.maxSpeed = maxSpeed;
   
  //4- Сьілка на обект возвращаетса в место вьізова new Car
};

Car.prototype.Hi = function () {
    // console.log(this);
    console.log('Hello :)');
Car.prototype.ChengePrice = function (newPrise) {
        this.price = newPrise
    }
}
// 1. Если функция создаетса через New , создаетса пустой обект!
const myCar = new Car({
    brand: 'bmw',
    modal: 'x5',
    price: '20000',
    maxSpeed: '300',
});
console.log(myCar);
myCar.Hi();

const myCar2 = new Car({
  brand: 'mersedes',
  modal: 'm5',
  price: '15000',
  maxSpeed: '320',
});
console.log(myCar2);




myCar2.Hi();
myCar.ChengePrice(77777)

//////////// методьі Класи //////////////////


// class Carr {

//     constructor({ brand, modal, price } = {}) {
//         this.brand = brand;
//         this.modal = modal;
//         this.price = price;
//     }

//     changePrise(newPrise) {
//     this.price = newPrise
// }
// }

// const myCar = new Carr({
//   brand: 'lada',
//   modal: 'kalina',
//   price: '8000',
// });

// console.log(myCar);
///////////////////////////////////////////////////5.2
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
// this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },

// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount());
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance());
// console.log(customer.getOrders());


////////////////////////////5.3
// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//     },
  
 
//   // Change code above this line
// };


/////////////////////5.4
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;
// console.log(child);



//////////////////////5.5
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

/////////////////5.7
// class Car {
//   // Change code below this line
// constructor(brand, model, price){
// this.brand = brand;
// this.model = model;
// this.price = price;
// }
//   // Change code above this line
// }
// new Car("Audi", "Q3", 36000)
// new Car("BMW", "X5", 58900)
// new Car("Nissan","Murano", 31700)

////5.8
// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });

////////////5.9
// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     // Change code below this line
//     getPrice() {
//         return this.price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }

////////////5.10
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     if (this.items.includes(itemToRemove)) {
//       const index = this.items.indexOf(itemToRemove);
//       this.items.splice(index, 1);
//     }
//   }
// }


// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

///////////////////5.11

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = this.value + str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

/////////////5.12
// class Car {
//   #brand;
//   // Change code below this line

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }


/////////5.13
// class Storage {
//   #items;
//   // Change code below this line

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }
/////////5.14
// class StringBuilder {#value
//   // Change code below this line

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

///////////5.15
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }


////////////////////////5.17
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     } else {
//       return 'Success! Price is within acceptable limits';
//     }
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

//////////5.18
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }


5.19
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
// constructor({email, accessLevel}){
//   super (email);
//   this.accessLevel = accessLevel;
// }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

/////////////2.20

// blacklistedEmails = []
//    blacklist(email) {
//      return this.blacklistedEmails.push(email)
//    }
//    isBlacklisted(email){
//      return this.blacklistedEmails.includes(email)
//    }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
