import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart() {
    this.props.cartContext.addCart(this.props.product);
  }

  render() {
    const item = document.createElement('div');
    item.className = 'product-item';

    item.innerHTML = `
      <div class="product-item__image">
        <img src="${this.props.product.image}" />
      </div>
      <div class="product-item__info">
        <p>${this.props.product.title}</p>
        <strong>${this.props.product.price}</strong>
        <ul>
          <li>${this.props.product.category}</li>
        </ul>
      </div>
      <button class="btn btn--add-cart">Add Cart</button>
    `;

    item.querySelector('.btn--add-cart').addEventListener('click', this.handleAddCart);

    return item;
  }
}