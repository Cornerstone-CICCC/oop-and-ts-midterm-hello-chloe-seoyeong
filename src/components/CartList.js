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
    this.cartWrap = null;
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
      <p>Total Price: <strong class="number">${total.toFixed(2)}</strong></p>
    `;
    this.totalItem.innerHTML = `
      <p>Total Item(s): <strong class="number">${count}</strong></p>
    `;
  }

  updateCart(item) {
    this.state.items = item;
    this.cartList.innerHTML = "";
    const emptyCartMessage = document.createElement('li');
    emptyCartMessage.className = "cart-empty";
    emptyCartMessage.innerHTML = `
      <p>No items...</p>
    `;

    if(this.state.items.length === 0) {
      this.cartList.appendChild(emptyCartMessage);
      this.cartWrap.classList.add('collapse')
    } else {
      this.state.items.forEach(item => {
        const cartItem = new CartItem({
          item,
          cartContext: this.props.cartContext
        })
        this.cartList.appendChild(cartItem.render());
      })
      this.cartWrap.classList.remove('collapse')
    }
  }

  render() {
    this.cartWrap = document.createElement('div')
    this.cartWrap.className = 'cart-wrap'
    this.cartWrap.innerHTML = `
      <div class="cart-list-wrap">
        <ul class="cart-list"></ul>
        <div class="cart-total">
          <div class="cart-total-item"></div>
          <div class="cart-total-price"></div>
        </div>
        <button class="btn-collapse">
          <span class="a11y-hidden">collapse</span>
        </button>
      </div>
    `;

    this.cartList = this.cartWrap.querySelector('.cart-list');
    this.totalPrice = this.cartWrap.querySelector('.cart-total-price')
    this.totalItem = this.cartWrap.querySelector('.cart-total-item')

    this.updateCart(this.state.items);
    this.updateTotalInfo(this.state.items); // showing initial "Total price: 0"

    this.cartWrap.querySelector('.btn-collapse').addEventListener('click', () => {
      this.cartWrap.classList.contains('collapse') ? this.cartWrap.classList.remove('collapse') : this.cartWrap.classList.add('collapse')
    });

    return this.cartWrap;
  }
}