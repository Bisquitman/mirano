import {store} from "@/scripts/Store";
import {ListType} from "@/scripts/ListType";

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');
  const choicesBox = document.querySelector('.filter__choices-box_type');

  const updateTypeChoicesVisibility = () => {
    const categories = store.getCategories();
    // console.log("categories", categories);

    if (categories.size) {
      typeChoices.style.display = '';
      choicesBox.textContent = '';
      const listType = ListType([...categories]);
      choicesBox.append(listType);
    } else {
      typeChoices.style.display = 'none';
    }
  };

  store.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};
