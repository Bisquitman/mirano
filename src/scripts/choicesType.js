import {store} from "@/scripts/Store";

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');

  const updateTypeChoicesVisibility = () => {
    const category = store.getCategories();
    console.log(category);

    if (category.size) {
      typeChoices.style.display = '';
    //   !todo обновить категории
    } else {
      typeChoices.style.display = 'none';
    }
  };

  store.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};
