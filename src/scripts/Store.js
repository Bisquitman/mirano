import {API_URL} from "@/scripts/API";

class Store {
  constructor() {
    this.observers = []; // Массив для хранения функций-наблюдателей
  }

  // Метод для добавления новых наблюдателей
  // (наблюдатели - функции, которые вызываются при изменении состояния)
  subscribe(observerFunction) {
    this.observers.push(observerFunction);
  }

  // Метод для уведомления всех наблюдателей об изменениях в хранилище
  notifyObservers() {
    this.observers.forEach((observer) => observer()); // observer() (вызывается) - это каждая из функций-наблюдателей, находящихся в массиве observers
  }
}

// ProductStore наследуется от Store и добавляет свои методы и свойства
// для продуктов
class ProductStore extends Store {
  constructor() {
    super();
    this.products = [];
    this.categories = new Set();
  }

  getProducts() {
    return this.products;
  }

  setProducts(newProducts) {
    this.products = newProducts;
    this.updateCategories(newProducts);
    this.notifyObservers();
  }

  getCategories() {
    return this.categories;
  }

  updateCategories(products) {
    this.categories.clear();

    products.forEach((product) => {
      if (product.categories) {
        product.categories.forEach((category) => {
          this.categories.add(category);
        });
      }
    });

    this.notifyObservers();
  }
}

class CartStore extends Store {
  constructor() {
    super();
    this.cart = [];
  }

  async init() {
    await this.registerCart();
    await this.fetchCart();
  }

  async registerCart() {
    try {
      const response = await fetch(`${API_URL}/api/cart/register`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (e) {
      console.error(e);
    }
  }

  getCart() {
    return this.cart;
  }

  async fetchCart() {
    try {
      const response = await fetch(`${API_URL}/api/cart`, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      this.cart = await response.json();
      this.notifyObservers();
    } catch (e) {
      console.error(e);
    }
  }

  async postCart({id, quantity}) {
    try {
      const response = await fetch(`${API_URL}/api/cart/items`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({productId: id, quantity}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      this.cart = await response.json();
      this.notifyObservers();
    } catch (e) {
      console.error(e);
    }
  }

  async addProductCart(id) {
    await this.postCart({id, quantity: 1});
  }

  clearCart() {
    this.cart = [];
    this.notifyObservers();
  }
}

export const productStore = new ProductStore();
export const cartStore = new CartStore();
