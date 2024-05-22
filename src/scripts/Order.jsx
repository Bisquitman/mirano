const openSelect = () => {
  const selectWrapper = document.querySelector('.form-order__select-wrapper');
  selectWrapper.classList.add('form-order__select-wrapper_active');
}

const closeSelect = () => {
  const selectWrapper = document.querySelector('.form-order__select-wrapper');
  selectWrapper.classList.remove('form-order__select-wrapper_active');
}

export const Order = (totalPriceValue) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : (date.getDate());
  const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1);
  const deliveryDate = `${day}.${month}`;

  return (
    <div className="modal order">
      <div className="order__wrapper">
        <h2 className="order__title">Оформить заказ</h2>

        <form className="order__form form-order" id="order">
          <fieldset className="form-order__fieldset">
            <legend className="form-order__legend">Данные заказчика</legend>
            <div className="form-order__input-group">
              <input type="text" className="form-order__input" name="name-buyer" placeholder="Имя"/>
              <input type="tel" className="form-order__input" name="phone-buyer" placeholder="Телефон"/>
            </div>
          </fieldset>

          <fieldset className="form-order__fieldset">
            <legend className="form-order__legend">Данные получателя</legend>
            <div className="form-order__input-group">
              <input type="text" className="form-order__input" name="name-recipient" placeholder="Имя"/>
              <input type="tel" className="form-order__input" name="phone-recipient" placeholder="Телефон"/>
            </div>
          </fieldset>

          <fieldset className="form-order__fieldset">
            <legend className="form-order__legend">Адрес</legend>
            <div className="form-order__input-group">
              <input type="text" className="form-order__input" name="street" placeholder="Улица"/>
              <input type="text" className="form-order__input form-order__input_small" name="house" placeholder="Дом"/>
              <input type="text" className="form-order__input form-order__input_small" name="apartment"
                     placeholder="Квартира"/>
            </div>
          </fieldset>

          <fieldset className="form-order__fieldset">
            <div className="form-order__payment">
              <label className="form-order__label radio">
                <input className="radio__input" type="radio" name="payment-online" value="true" checked/>
                Оплата онлайн
              </label>
            </div>
          </fieldset>

          <div className="form-order__delivery">
            <label className="form-order__delivery-date" htmlFor="delivery">Доставка <span>{deliveryDate}</span></label>

            <input type="hidden" name="delivery-date" value={deliveryDate}/>
            <div className="form-order__select-wrapper">
              <select
                className="form-order__select"
                name="delivery-time"
                id="delivery"
                onFocus={openSelect}
                onBlur={closeSelect}
              >
                <option value="9-12" selected>с 9:00 до 12:00</option>
                <option value="12-15">с 12:00 до 15:00</option>
                <option value="15-18">с 15:00 до 18:00</option>
                <option value="18-21">с 18:00 до 21:00</option>
              </select>
            </div>
          </div>
        </form>

        <div className="order__footer">
          <p className="order__total-price"><span>{totalPriceValue.toLocaleString()}</span>&nbsp;&#8381;</p>
          <button className="order__order-btn button" type="submit" form="order">Заказать</button>
        </div>
      </div>

      <button className="order__close" type="button">&#10006;</button>
    </div>
  )
};
