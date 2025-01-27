import { Component } from "../common/Component.js";
import { CartItem } from "../components/CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.updateCart = this.updateCart.bind(this);
    this.props.cartContext.subscribe(this.updateCart);
    this.cartItemList = null;
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
    `;

    this.cartItemList = cartList.querySelector('ul');

    return cartList;
  }
}