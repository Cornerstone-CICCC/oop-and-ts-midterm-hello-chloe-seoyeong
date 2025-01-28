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
    // this.handleExpand = this.handleExpand.bind(this);
    this.cartItemList = null;
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

    // this.cartItemList.appendChild(totalPrice);
  }

  updateCart(item) {
    this.state.items = item;
    this.cartItemList.innerHTML = "";

    this.state.items.forEach(item => {
      const cartItem = new CartItem({
        item,
        cartContext: this.props.cartContext
      })

      this.cartItemList.appendChild(cartItem.render());
    })
  }

  render() {
    const cartList = document.createElement('div')
    cartList.className = 'item-list-wrap'
    cartList.innerHTML = `
      <ul></ul>
      <div class="total-price"></div>
      <button class="btn-expand">Expand</button>
    `;

    this.cartItemList = cartList.querySelector('ul');
    this.totalPrice = cartList.querySelector('.total-price')
    cartList.querySelector('.btn-expand').addEventListener('click', () => {
      cartList.classList.add('clicked');
    });

    return cartList;
  }
}