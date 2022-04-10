//addEventListener     !!!Делаем Клики на кнопки!!!!
const targetBtn = document.querySelector('.js-target-btn');
const addListenedBtn = document.querySelector('.js-add-listened');
const RemoveListenerBtn = document.querySelector('.js-remove-listener');



addListenedBtn.addEventListener('click', () => {
  console.log('вешаю слюшетеля собитий');
  
  targetBtn.addEventListener('click' , onTargetBtnClick)
})

RemoveListenerBtn.addEventListener('click', () => {
  console.log("снимаю слушателя собитий");

  targetBtn.removeEventListener("click" , onTargetBtnClick)
})

function onTargetBtnClick() {
  console.log('клик по кнопке');
}

///////////////////////////////////////////////Патерн обем сьілок////////////////////////////////////////

 
const input = document.querySelector('.js-input');
const nameLabel = document.querySelector('.js-button > span');
const licenseCheckbox = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');
/// инпут
input.addEventListener('input', onInputChange)
licenseCheckbox.addEventListener('change' , onLicenseChange)

///чекбокс
licenseCheckbox.addEventListener('change', onListener);
function onListener() {
  console.log(' я нажьімаю ');
}

function onInputChange(event) {
  nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  btn.disabled = !event.currentTarget.checked;
}


//  --------------------Перебор масива--------------------!!!!!!!!!
const elem = document.querySelectorAll('li')
// console.log(elem[1]);

// for (const item of elem) {
//   console.log(item);
// }

// elem.forEach(item => {
//   console.log(item);
// });


const list = document.querySelector('.usernames');
console.log(list);


const lastitem = document.createElement('li')
lastitem.textContent = ' Poly'
list.append(lastitem);


const firstItem = document.createElement('li')
firstItem.textContent = 'Ajax'
list.prepend(firstItem);

const title = document.createElement('h1')
title.textContent = 'USERNAMES';
list.before(title)

const text = document.createElement('p')
text.classList.add('text__list')
text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
list.after(text)  
console.log(text);



// ## Example 3 - Калькулятор

// Создайте объект `calculator` с тремя методами:

// - `read(a, b)`- принимает два значения и сохраняет их как свойства объекта.
// - `add()` - возвращает сумму сохранённых значений.
// - `mult()` - перемножает сохранённые значения и возвращает результат.

// ```js
// const calculator = {};
// ```



/////////////DZ-2
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];



const elements = ingredients.map(option => {
  const navItemEl = document.createElement('li');
  navItemEl.textContent = option;
  navItemEl.classList.add('item');

  return navItemEl;
});
console.log(elements);
document.querySelector('#ingredients').append(...elements);


