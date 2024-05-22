import {callbackWithPreload} from "@/scripts/preload";
import {productStore} from "@/scripts/Store";

export const initSearchProducts = () => {
  const headerForm = document.querySelector('.header__form');
  const goodsTitle = document.querySelector('.goods__title');
  const goodsSection = document.querySelector('.goods');

  headerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(headerForm);

    const searchQuery = formData.get('search').trim();

    if (searchQuery) {
      callbackWithPreload(goodsSection, productStore.fetchProducts(), {search: searchQuery});
      goodsTitle.innerHTML = `Результаты поиска по запросу &laquo${searchQuery}&raquo;`;
    }

    headerForm.reset();
  });
}