export class CartContext {
  constructor() {
    this.carts = [];
    this.listeners = [];
  }

  getCarts() {
    return this.carts;
  }

  getQuantity(item) {
    this.carts.filter(cart => {
      if(cart.id === item.id) {
        console.log(cart.quantity)
        return cart.quantity;
      }
    })
  }

  addCart(item) {
    const found = this.carts.find(cart => cart.id === item.id);
    if(found) {
      this.carts = this.carts.map(cart => {
        if(cart.id === item.id) {df
          return {
            ...cart,
            quantity: cart.quantity + 1
          }
        } else {
          return cart;
        }
      })
    } else {
      this.carts.push({
        ...item,
        quantity: 1
      })
    }

    this.notifyListeners();
  }

  plusItem() {
    console.log("plus")
    this.notifyListeners();
  }

  minusItem() {
    console.log("minus")
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.carts));
  }
}
