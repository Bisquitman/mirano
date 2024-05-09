import {ProductCard} from "@/scripts/ProductCard";
import {store} from "@/scripts/Store";

export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');

  const updateList = () => {
    const products = store.getProducts(); // Получаем продукты из хранилища (вместо fetchProducts())

    goodsList.innerHTML = '';

    products.forEach((product) => {
      // console.log(product);
      const productCard = ProductCard(product);
      goodsList.append(productCard);
    });
  };

  store.subscribe(updateList);
  updateList();
}
