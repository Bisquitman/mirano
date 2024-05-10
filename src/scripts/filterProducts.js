import {fetchProducts} from "@/scripts/API";

const filterType = (type) => {
  fetchProducts({type: type.value});
};

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');
  const goodsTitle = document.querySelector('.goods__title');

  filterType(filterForm.type);

  filterForm.addEventListener('input', (e) => {
    const target = e.target;

    if (target.name === 'type') {
      goodsTitle.textContent = filterForm.querySelector(`[for="${filterForm.type.value}"]`).textContent.toLocaleUpperCase();
      filterType(filterForm.type);
    }
  });
}
