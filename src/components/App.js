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
        <div class="list-wrap"></div>
        <aside></aside>
      </main>
      <footer></footer>
    `;

    const header = new Header({
      siteTitle: "cart"
    }).render();
    const footer = new Footer().render();

    const cartList = new CartList({
      cartContext: this.props.cartContext
    }).render();

    const productList = new ProductList({
      cartContext: this.props.cartContext
    })

    appContainer.querySelector('header').appendChild(header);
    appContainer.querySelector('footer').appendChild(footer);

    // cartList.mount(appContainer.querySelector('aside'))
    productList.mount(appContainer.querySelector('.list-wrap'));
    // appContainer.querySelector('aside').appendChild(cartList);

    return appContainer;
  }
}