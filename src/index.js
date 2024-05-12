import '@/scss/index.scss';
import { initFixerHeader } from "@/scripts/fixerHeader";
import { initChoices } from "@/scripts/choices";
import { initCart } from "@/scripts/cart";
import { renderProducts } from "@/scripts/renderProducts";
import { initChoicesType } from "@/scripts/choicesType";
import { filterProducts } from "@/scripts/filterProducts";
import {initSearchProducts} from "@/scripts/searchProducts";

const init = () => {
  initFixerHeader();
  initChoices();
  initChoicesType();
  initCart();
  initSearchProducts();
  renderProducts();
  filterProducts();
}

document.addEventListener('DOMContentLoaded', init);
