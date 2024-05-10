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

export const store = new ProductStore();
