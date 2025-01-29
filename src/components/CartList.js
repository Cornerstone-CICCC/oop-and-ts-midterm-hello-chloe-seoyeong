import { Component } from "../common/Component.js";
import { CartItem } from "../components/CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.updateCart = this.updateCart.bind(this);
    this.props.cartContext.subscribe(this.updateCart);
    this.updateTotalInfo = this.updateTotalInfo.bind(this);
    this.props.cartContext.subscribe(this.updateTotalInfo);
    this.cartList = null;
    this.totalPrice = null;
    this.totalItem =  null;
  }

  // updateTotalItem(item) {
  //   // this.state.items = item;
  //   let itemCount = 0;
  //   this.state.items.map(item => )
  // }

  updateTotalInfo(item) {
    // this.state.items = item;
    let total = 0;
    let count = 0;
    this.state.items.map(item => {
      total += item.quantity * item.price;
      count += item.quantity;
    })
    this.totalPrice.innerHTML = `
      <p>Total Price: <strong>${total.toFixed(2)}</strong></p>
    `;
    this.totalItem.innerHTML = `
      <p>Total Item(s): <strong>${count}</strong></p>
    `;
  }

  updateCart(item) {
    this.state.items = item;
    this.cartList.innerHTML = "";
    this.state.items.forEach(item => {
      const cartItem = new CartItem({
        item,
        cartContext: this.props.cartContext
      })

      this.cartList.appendChild(cartItem.render());
    })
  }

  render() {
    const cartWrap = document.createElement('div')
    cartWrap.className = 'cart-wrap'
    cartWrap.innerHTML = `
      <div class="cart-list-wrap">
        <ul class="cart-list"></ul>
        <div class="cart-total">
          <div class="cart-total-item"></div>
          <div class="cart-total-price"></div>
        </div>
        <button class="try">TRY</button>
      </div>
    `;

    this.cartList = cartWrap.querySelector('.cart-list');
    this.totalPrice = cartWrap.querySelector('.cart-total-price')
    this.totalItem = cartWrap.querySelector('.cart-total-item')

    this.updateTotalInfo(this.state.items); // showing initial "Total price: 0"

    cartWrap.querySelector('.try').addEventListener('click', () => {
      cartWrap.classList.contains('collapse') ? cartWrap.classList.remove('collapse') : cartWrap.classList.add('collapse')
    });

    return cartWrap;
  }
}