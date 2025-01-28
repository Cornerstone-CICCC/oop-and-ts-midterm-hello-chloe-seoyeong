import { Component } from "../common/Component.js";
import { CartItem } from "../components/CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.updateCart = this.updateCart.bind(this);
    this.props.cartContext.subscribe(this.updateCart);
    this.updateTotalPrice = this.updateTotalPrice.bind(this);
    this.props.cartContext.subscribe(this.updateTotalPrice);
    // this.handleShowingCart = this.handleShowingCart.bind(this);
    this.cartList = null;
    this.totalPrice = null;
  }

  updateTotalPrice(item) {
    this.state.items = item;
    let total = 0
    this.state.items.map(item => {
      total += item.quantity * item.price;
    })
    this.totalPrice.innerHTML = `
      <p>Total Price: <strong>${total.toFixed(2)}</strong></p>
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

  // handleShowingCart() {
  //   this.props.cartContext.controlShowingCart(this.cartList);
  // }

  render() {
    const cartWrap = document.createElement('div')
    cartWrap.className = 'cart-wrap'
    cartWrap.innerHTML = `
      <div class="cart-list-wrap">
        <ul class="cart-list"></ul>
        <div class="cart-total-price"></div>
      </div>
      <button class="btn-collapse">Collapse</button>
    `;

    this.cartList = cartWrap.querySelector('.cart-list');
    this.totalPrice = cartWrap.querySelector('.cart-total-price')

    this.updateTotalPrice(this.state.items); // showing initial "Total price: 0"

    // cartWrap.querySelector('.btn-collapse').addEventListener('click', () => {
    //   cartWrap.classList.contains('collapsed') ? cartWrap.classList.remove('collapsed') : cartWrap.classList.add('collapsed');
    // });
    // cartWrap.querySelector('.btn-collapse').addEventListener('click', this.handleShowingCart);

    return cartWrap;
  }
}