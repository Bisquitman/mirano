import {API_URL} from "@/scripts/API";
import {cartStore} from "@/scripts/Store";

export const ProductCard = (product) => (
  <li class="goods__item">
    <article class="goods__card card">
      <img class="card__img" src={`${API_URL}${product.photoUrl}`} alt={product.name}/>

      <div class="card__content">
        <h3 class="card__title">{product.name}</h3>

        <div class="card__footer">
          <p class="card__delivery delivery">сегодня в&nbsp;14:00</p>
          <button class="card__btn"
                  onMouseEnter={(e) => e.target.innerHTML = 'в корзину'}
                  onMouseLeave={(e) => e.target.innerHTML = `${product.price.toLocaleString()}&nbsp;₽`}
                  onClick={() => cartStore.addProductCart(product.id)}
          >{product.price.toLocaleString()}&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  </li>
);
