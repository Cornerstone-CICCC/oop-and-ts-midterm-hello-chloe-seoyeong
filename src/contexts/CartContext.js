export class CartContext {
  constructor() {
    this.carts = [];
    this.listeners = [];
  }

  getCarts() {
    return this.carts;
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.carts));
  }
}
