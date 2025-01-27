import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    // this.updateCartItem = this.updateCartItem.bind(this);
    // this.props.cartContext.subscribe(this.updateCartItem);
  }

  // updateCartItem() {
  //   const product = this.props.cartContext.getCarts();
    
  // }

  handleMinus(item) {
    this.props.cartContext.minusItem(item);
  }

  handlePlus(item) {
    this.props.cartContext.plusItem(item);
  }

  render() {
    const itemLi = document.createElement('li');
    itemLi.className = 'item-li'
    itemLi.innerHTML = `
      <p>${this.props.item.title}</p>
      <div>
        <button class="btn-minus">-</button>
        <span class="item-count"></span>
        <button class="btn-plus">+</button>
      </div>
    `;


    const qu = this.props.cartContext.getQuantity(this.props.item)

    console.log(qu)

    itemLi.querySelector('.btn-minus').addEventListener('click', this.handleMinus);
    itemLi.querySelector('.btn-plus').addEventListener('click', this.handlePlus);

    return itemLi;
  }
}