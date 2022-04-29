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




//  --------------------Перебор масива--------------------!!!!!!!!!
const elem = document.querySelectorAll('li')
// console.log(elem[1]);

// for (const item of elem) {
//   console.log(item);
// }

// elem.forEach(item => {
//   console.log(item);
// });

/////////////////////////////////////////////////  7 модуль Задача 1



// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// console.log(galleryItems);

// const galleryItemsContainer = document.querySelector(".gallery");
// const cardsMarcup = createColorCardsMarkup(galleryItems);
// galleryItemsContainer.insertAdjacentHTML("beforeend", cardsMarcup);
// galleryItemsContainer.addEventListener("click", onClickGallery);

// function createColorCardsMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
// <a class="gallery__link" href="${original}">
//     <img
//     class="gallery__image"
//     src="${preview}"
//     data-source="${original}"
//     alt="${description}"
//     />
// </a>
// </div>`;
//     })
//     .join("");
// }



// function onClickGallery(event) {
//   const isGalleryImageEl = event.target.classList.contains("gallery__image");
//   if (!isGalleryImageEl) {
//     return;
//   }
//   event.preventDefault();

//   const instance = basicLightbox.create(
//     `
//       <img src="${event.target.dataset.source}">
//       `,
//     {
//       onShow: (instance) => {
//         const listener = function (event) {
//           if (event.key === "Escape") {
//             document.removeEventListener("keydown", listener);
//             return instance.close();
//           }
//         };
//         document.addEventListener("keydown", listener);
//       },
//     }
//   );

//   instance.show();
// }




localStorage.setItem('ui-theme', 'light');
localStorage.setItem('sidebar', 'expanded');
localStorage.setItem('notification-level', 'mute');

localStorage.setItem("ui-theme", "dark");

const theme = localStorage.getItem("ui-theme");
console.log(theme); 