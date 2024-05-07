import {fetchProducts} from "@/js/API.js";
import {ProductCard} from "@/js/ProductCard.jsx";

export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');

  const products = await fetchProducts();

  goodsList.innerHTML = '';

  products.forEach((product) => {
    console.log(product);
    const productCard = ProductCard(product);
    goodsList.append(productCard);
  });
}
