import {ProductCard} from "@/scripts/ProductCard";
import {store} from "@/scripts/Store";

export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');

  const updateList = () => {
    const products = store.getProducts(); // Получаем продукты из хранилища (вместо fetchProducts())

    goodsList.innerHTML = '';

    if (products.length === 0) {
      const messageItem = document.createElement('li');
      messageItem.textContent = 'Товары не найдены...';
      messageItem.classList.add('goods__no-product');
      goodsList.append(messageItem);
      return;
    }

    const productCards = products.map((product) => {
      // console.log(product);
      return ProductCard(product);
    });
    goodsList.append(...productCards);
  };

  store.subscribe(updateList);
  updateList();
}
