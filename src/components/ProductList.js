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
    const productUl = document.createElement('ul')
    productUl.className = 'product-ul';

    this.state.products.forEach(product => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext
      })
      productUl.appendChild(productItem.render());
    })

    return productUl;
  }
}