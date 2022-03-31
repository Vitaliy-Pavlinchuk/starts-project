//addEventListener     !!!Делаем Клики на кнопки!!!!
const targetBtn = document.querySelector('.js-target-btn');
const addListenedBtn = document.querySelector('.js-add-listened');
const RemoveListenerBtn = document.querySelector('.js-remove-listener');

targetBtn.addEventListener('click', () => {
  console.log('клик');
});

function targrtButtonClick() {
  console.log('клик');
}
///////////////////////////////////////////////////////////////////////////////////////

const refs = {
  output: document.querySelector('js-output'), 
  clearBtn: document.querySelector('js-clear')  
}

window.addEventListener('keydown', onKeypress)

function onKeypress(event) {
  // console.log(event);
  console.log('event.key:', event.key);
}

function onClearOutput() {
  
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



