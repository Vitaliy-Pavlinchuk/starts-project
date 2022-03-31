(() => {
  const toggleBtnIceCream = document.querySelector('.product-card__button--ice-cream');
  const toggleBtnIceCoffee = document.querySelector('.product-card__button--ice-coffee');
  const toggleBtnIceMilkShake = document.querySelector('.product-card__button--milk-shake');

  toggleBtnIceCream.addEventListener('click', toggleVisibility);
  toggleBtnIceCoffee.addEventListener('click', toggleVisibility);
  toggleBtnIceMilkShake.addEventListener('click', toggleVisibility);

  function toggleVisibility() {
    if (this.classList.contains('product-card__button--ice-cream')) {
      document
        .querySelector('[products-desc-ice-cream]')
        .classList.toggle('product-card__description--hidden');
      toggleBtnIceCream.classList.toggle('product-card__button--opened');
    }

    if (this.classList.contains('product-card__button--ice-coffee')) {
      document
        .querySelector('[products-desc-ice-coffee]')
        .classList.toggle('product-card__description--hidden');
      toggleBtnIceCoffee.classList.toggle('product-card__button--opened');
    }

    if (this.classList.contains('product-card__button--milk-shake')) {
      document
        .querySelector('[products-desc-milk-shake]')
        .classList.toggle('product-card__description--hidden');
      toggleBtnIceMilkShake.classList.toggle('product-card__button--opened');
    }
  }
})();
