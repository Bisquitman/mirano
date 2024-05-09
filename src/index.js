import '@/scss/index.scss';
import { initFixerHeader } from "@/scripts/fixerHeader";
import { initChoices } from "@/scripts/choices";
import { initCart } from "@/scripts/cart";
import { renderProducts } from "@/scripts/renderProducts";
import { initChoicesType } from "@/scripts/choicesType";
import { filterProducts } from "@/scripts/filterProducts";

const init = () => {
  initFixerHeader();
  initChoices();
  initChoicesType();
  initCart();
  renderProducts();
  filterProducts();
}

document.addEventListener('DOMContentLoaded', init);
