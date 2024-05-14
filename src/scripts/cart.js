import {cartStore} from "@/scripts/Store";
import {renderCart} from "@/scripts/renderCart";

const headerCartBtn = document.querySelector('.header__cart-btn');
const cart = document.querySelector('.cart');
const cartClose = document.querySelector('.cart__close');

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
    headerCartBtn.textContent = cartStore.getCart().length;
  });

  headerCartBtn.addEventListener('click', toggleCart);

  cartClose.addEventListener('click', (e) => {
    cart.classList.remove('cart_open');
  });
}
