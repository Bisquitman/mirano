import {debounce} from "@/scripts/debounce";
import {callbackWithPreload} from "@/scripts/preload";
import {productStore} from "@/scripts/Store";

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');
  const goodsTitle = document.querySelector('.goods__title');
  const goodsSection = document.querySelector('.goods');

  const applyFilters = () => {
    const formData = new FormData(filterForm);
    const type = formData.get('type');
    const minPrice = formData.get('minPrice');
    const maxPrice = formData.get('maxPrice');
    const params = {}; // то, что будет отправляться на сервер

    if (type) params.type = type;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    callbackWithPreload(goodsSection, productStore.fetchProducts(), params);
  };

  applyFilters();

  const applyPriceFilters = debounce(applyFilters, 500);

  filterForm.addEventListener('input', (e) => {
    const target = e.target;

    if (target.name === 'type') {
      goodsTitle.textContent = target.labels[0].textContent;
      // goodsTitle.textContent = filterForm.querySelector(`[for="${filterForm.type.value}"]`).textContent.toLocaleUpperCase();
      filterForm.minPrice.value = '';
      filterForm.maxPrice.value = '';
      applyFilters();
      return;
    }

    if (target.name === 'minPrice' || target.name === 'maxPrice') {
      applyPriceFilters();
    }
  });
}
