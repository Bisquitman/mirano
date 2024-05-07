export const API_URL = 'https://resilient-florentine-cicada.glitch.me';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/products`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.statusText}`);
    }

    const products = response.json();
    return products;
  } catch (err) {
    console.error(`Ошибка при получении данных: ${err}`);
    return [];
  }
}
