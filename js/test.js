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


// const galleryItemsContainer = document.querySelector(".gallery");
// const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// galleryItemsContainer.addEventListener("click", onClickGalleryItems);

// function createGalleryItemsMarkup(items) {
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
//       .join("");
    
   
// }

// function onClickGalleryItems(event) {
//   event.preventDefault();
//   const galleryImageEl = event.target.classList.contains("gallery__image");
//   if (!galleryImageEl) {
//     return;
//   }
//   const urlSource = event.target.dataset.source;
//   createModal(urlSource);
// }
// function createModal(x) {
//   const instance = basicLightbox.create(
//     `
//     <div class="modal">
// <img src="${x}"/>
//     </div>
// `,
//     {
//       onShow: (instance) => {
//         document.addEventListener("keydown", onEscClose);
//         function onEscClose(e) {
//           if (e.code == "Escape") {
//             instance.close();
//             document.removeEventListener("keydown", onEscClose);
//           }
//         }
//       },
//     }
//   );

//   instance.show();
// }




