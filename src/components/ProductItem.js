import { Component } from "../common/Component.js";
import { Modal } from "./Modal.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddCart = this.handleAddCart.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleAddCart() {
    this.props.cartContext.addCart(this.props.product);

  }

  handleModal() {

    const modal = new Modal({
      product: this.props.product,
      cartContet: this.props.cartContext
    })

    this.props.appContainer.appendChild(modal.render());
  }

  render() {
    const item = document.createElement('li');
    item.className = 'product-item';

    item.innerHTML = `
      <a href="#" class="product-item__detail">
        <div class="product-item__image">
          <img src="${this.props.product.image}" />
        </div>
        <div class="product-item__info">
          <p>${this.props.product.title}</p>
          <span class="product-item__category">${this.props.product.category}</span>
        </div>
      </a>
      <div class="product-item__bottom">
        <strong class="product-item__price">$ ${this.props.product.price}</strong>
        <button class="btn btn--add-cart">
          <span class="a11y-hidden">Add Cart</span>
        </button>
      </div>
    `;

    item.querySelector('.btn--add-cart').addEventListener('click', this.handleAddCart);

    item.querySelector('.product-item__detail').addEventListener('click', this.handleModal)

    return item;
  }
}