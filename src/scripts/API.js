import {productStore} from "@/scripts/Store";

// export const API_URL = "https://maize-marmalade-responsibility.glitch.me";
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
