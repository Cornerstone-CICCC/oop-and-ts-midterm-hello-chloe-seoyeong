export class CartContext {
  constructor() {
    this.carts = [];
    this.listeners = [];
  }

  getCarts() {
    return this.carts;
  }

  // Adding item into Cart
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

  // plus item in cart
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

  // minus item in cart
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

  // remove item in cart / when item quantity is 1
  removeItem(item) {
    this.carts = this.carts.filter(cart => cart.id !== item.id)

    this.notifyListeners();
  }

  controlShowingCart(ele) {
    console.log(ele)
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.carts));
  }
}
