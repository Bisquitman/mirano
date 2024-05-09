import {store} from "@/scripts/Store";
import {CategoryItem} from "@/scripts/CategoryItem";

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');
  const choicesList = document.querySelector('.filter__type-list');

  const updateTypeChoicesVisibility = () => {
    const categories = store.getCategories();
    // console.log("categories", categories);

    if (categories.size) {
      typeChoices.style.display = '';
    //   !todo обновить категории
    //   -----------------------------------
      choicesList.innerHTML = '';
      categories.forEach((category) => {
        console.log(category);
        const categoryItem = CategoryItem(category);
        choicesList.append(categoryItem);
      });
    //   ------------------------------------
    } else {
      typeChoices.style.display = 'none';
    }
  };

  store.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};
