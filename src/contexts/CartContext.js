export class CartContext {
  constructor() {
    this.carts = [];
    this.listeners = [];
  }

  getCarts() {
    return this.carts;
  }

  addCart(item) {
    const found = this.carts.find(cart => cart.id === item.id);
    if(found) {
      this.carts = this.carts.map(cart => {
        if(cart.id === item.id) {
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

  plusItem(item) {
    // this.addCart(item);
    this.carts = this.carts.map(cart => {
      if(cart.id === item.id) {
        return {
          ...cart,
          quantity: cart.quantity + 1
        }
      } else {
        return cart;
      }
    })

    this.notifyListeners();
  }

  minusItem(item) {
    this.carts = this.carts.map(cart => {
      if(cart.id === item.id) {
        return {
          ...cart,
          quantity: cart.quantity - 1
        }
        // if(cart.quantity > 1) {
        //   return {
        //     ...cart,
        //     quantity: cart.quantity - 1
        //   }
        // } else {
        //   console.log(this.carts)
        // }
      } else {
        return cart
      }
    })
    this.notifyListeners();
  }

  removeItem(item) {
    this.carts = this.carts.filter(cart => cart.id !== item.id)

    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.carts));
  }
}
