import {productStore} from "@/scripts/Store";

// export const API_URL = "https://mirano-api-f5s9.onrender.com";
// export const API_URL = "https://denim-wobbly-trout.glitch.me";
export const API_URL = "http://localhost:3000";

const formatQueryString = (params) => {
//   params - ОБЪЕКТ с параметрами
  if (Object.keys(params).length === 0) {
    return '';
  }

  // searchParams - создаём объект для хранения search-параметров
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value);
  });

  return `?${searchParams.toString()}`;
}

export const fetchProducts = async (params = {}) => {
  try {
    const response = await fetch(`${API_URL}/api/products${formatQueryString(params)}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.statusText}`);
    }

    const products = await response.json();

    productStore.setProducts(products);
  } catch (err) {
    console.error(`Ошибка при получении данных: ${err}`);
    return [];
  }
}

export const sendOrder = async (orderData) => {
  try {
    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP при отправке заказа :: ${response.statusText}`);
    }

    return await response.json();
  } catch (e) {
    console.error(e)
  }
}
