import { Component } from "../common/Component.js";
import { ProductItem } from "../components/ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  mount(container) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.state.products = data;
        container.appendChild(this.render());
      })
      .catch(err => console.error(err));
  }

  render() {
    const productWrap = document.createElement('div')
    productWrap.className = 'product-wrap'
    productWrap.innerHTML = `
      <div>
        <div>
          <strong>${this.state.products.length} Items</strong>
        </div>
        <div>
          <button class="btn-mode-change">
            <span>Grid</span>
          </button>
        </div>
      </div>
    `
    const productUl = document.createElement('ul')
    productUl.className = 'product-ul';

    this.state.products.forEach(product => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext,
        appContainer: this.props.appContainer
      })
      productUl.appendChild(productItem.render());
    })

    productWrap.querySelector('.btn-mode-change').addEventListener('click', () => {
      productUl.classList.contains('list') ? productUl.classList.remove('list') : productUl.classList.add('list');
    })

    productWrap.appendChild(productUl);

    return productWrap;
  }
}