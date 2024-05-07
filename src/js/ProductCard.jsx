import {API_URL} from "@/js/API.js";

export const ProductCard = (product) => (
  <li class="goods__item">
    <article class="goods__card card">
      <img class="card__img" src={`${API_URL}${product.photoUrl}`} alt={product.name}/>

      <div class="card__content">
        <h3 class="card__title">{product.name}</h3>

        <div class="card__footer">
          <p class="card__delivery delivery">сегодня в&nbsp;14:00</p>
          <button class="card__btn">
            <span class="card__btn-price">{product.price.toLocaleString()}&nbsp;₽</span>
            <span class="card__btn-text">в&nbsp;корзину</span>
          </button>
        </div>
      </div>
    </article>
  </li>
)
