import {cartStore} from "@/scripts/Store";
import {renderCart} from "@/scripts/renderCart";

const headerCartBtn = document.querySelector('.header__cart-btn');
const cart = document.querySelector('.cart');
const cartClose = document.querySelector('.cart__close');
const cartPriceTotal = document.querySelector('.cart__price_total');

const toggleCart = (e) => {
  cart.classList.toggle('cart_open');

  if (cart.classList.contains('cart_open') && window.innerWidth >= 1360) {
    cart.scrollIntoView({behavior: 'smooth', block: "start"});
  }
};

export const initCart = async () => {
  await cartStore.init();
  headerCartBtn.textContent = cartStore.getCart().length;

  renderCart();

  cartStore.subscribe(() => {
    const cart = cartStore.getCart();
    headerCartBtn.textContent = cart.length;

    const totalPriceValue = cart.reduce((acc, product) => (acc + product.price * product.quantity), 0);
    cartPriceTotal.innerHTML = `${totalPriceValue.toLocaleString()}&nbsp;₽`;
  });

  headerCartBtn.addEventListener('click', toggleCart);

  cartClose.addEventListener('click', (e) => {
    cart.classList.remove('cart_open');
  });
}
