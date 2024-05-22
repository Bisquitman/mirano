import {API_URL} from "@/scripts/API";
import {cartStore} from "@/scripts/Store";
import {debounce} from "@/scripts/debounce.js";

export const CartElem = (product) => (
  <li className="cart__item">
    <img className="cart__image" src={`${API_URL}${product.photoUrl}`} alt={product.name}/>

    <h4 className="cart__item-title">{product.name}</h4>

    <div className="cart__counter">
      <button
        className="cart__counter-btn"
        onClick={() => {
          cartStore.postCart({id: product.id, quantity: product.quantity - 1})
        }}>-
      </button>
      <input
        className="cart__counter-input"
        type="number"
        name=""
        value={product.quantity}
        min="0"
        max="99"
        onInput={debounce(({target}) => {
          const num = !isNaN(parseInt(target.value)) ? parseInt(target.value) : product.quantity;
          cartStore.postCart({
            id: product.id,
            quantity: num,
          });
          target.value = num;
        }, 200)}
      />
      <button
        className="cart__counter-btn"
        onClick={() => {
          cartStore.postCart({id: product.id, quantity: product.quantity + 1})
        }}>+
      </button>
    </div>

    <p className="cart__price">{(product.price * product.quantity).toLocaleString()}&nbsp;₽</p>
  </li>
);