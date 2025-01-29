import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddCart = this.handleAddCart.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.modalElement = null
  }

  handleAddCart() {
    this.props.cartContext.addCart(this.props.product);
  }

  handleModal() {
    this.modal.innerHTML = "";

    const modal = new Modal({
      product,
      cartContet: this.props.cartContext
    })

    this.modal.appendChild(modal.render());
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
          <strong>CAD ${this.props.product.price}</strong>
          <span class="product-item__category">${this.props.product.category}</span>
        </div>
      </a>
      <button class="btn btn--add-cart">
        <span class="a11y-hidden">Add Cart</span>
      </button>
    `;

    item.querySelector('.btn--add-cart').addEventListener('click', this.handleAddCart);

    item.querySelector('.product-item__detail').addEventListener('click', this.handleModal)

    return item;
  }
}