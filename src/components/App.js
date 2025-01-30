import { Component } from "../common/Component.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { CartList } from "../components/CartList.js";
import { ProductList } from "../components/ProductList.js";

export class App extends Component {

  render() {
    const appContainer = document.createElement('div');
    appContainer.className = 'container';
    appContainer.innerHTML = `
      <header></header>
      <main>
        <div class="container__product"></div>
        <div class="container__cart"></div>
      </main>
      <footer></footer>
    `;

    const header = new Header({
      siteTitle: "cart"
    }).render();
    const footer = new Footer().render();

    const productList = new ProductList({
      cartContext: this.props.cartContext,
      appContainer: appContainer
    })

    const cartList = new CartList({
      cartContext: this.props.cartContext
    }).render();

    appContainer.querySelector('header').appendChild(header);
    appContainer.querySelector('footer').appendChild(footer);

    productList.mount(appContainer.querySelector('.container__product'));
    appContainer.querySelector('.container__cart').appendChild(cartList);

    return appContainer;
  }
}