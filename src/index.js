import '@/scss/index.scss';
import { initFixerHeader } from "@/js/fixerHeader";
import { initChoices } from "@/js/choices";
import { initCart } from "@/js/cart";
import {renderProducts} from "@/js/renderProducts.js";

const init = () => {
  initFixerHeader();
  initChoices();
  initCart();
  renderProducts();
}

document.addEventListener('DOMContentLoaded', init);
