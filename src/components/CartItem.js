import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleMinus() {
    if(this.props.item.quantity > 1) {
      this.props.cartContext.minusItem(this.props.item);
    } else {
      this.props.cartContext.removeItem(this.props.item);
    }
  }

  handlePlus() {
    this.props.cartContext.plusItem(this.props.item);
  }

  handleRemove() {
    this.props.cartContext.removeItem(this.props.item);
  }

  render() {
    const itemLi = document.createElement('li');
    itemLi.className = 'item-li'
    itemLi.innerHTML = `
      <p>${this.props.item.title}</p>
      <div class="item-calculator">
        <button class="btn-minus">-</button>
        <span class="item-count">${this.props.item.quantity}</span>
        <button class="btn-plus">+</button>
      </div>
      <strong class="item-total-price">${(this.props.item.quantity * this.props.item.price).toFixed(2)}</strong>
      <button class="btn-delete">delete</button>
    `;

    // const qu = this.props.cartContext.getQuantity(this.props.item)

    // console.log(qu)

    itemLi.querySelector('.btn-minus').addEventListener('click', this.handleMinus);
    itemLi.querySelector('.btn-plus').addEventListener('click', this.handlePlus);
    itemLi.querySelector('.btn-delete').addEventListener('click', this.handleRemove)

    return itemLi;
  }
}