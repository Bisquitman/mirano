export const OrderSuccess = (id) => {
  return (
    <div className="order__wrapper">
      <h2 className="order__title">Заказ оформлен!</h2>
      <p className="order__id">Ваш номер заказа: {id}</p>
    </div>
  )
}
