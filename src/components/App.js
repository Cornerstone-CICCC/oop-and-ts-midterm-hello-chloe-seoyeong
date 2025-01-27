import { Component } from "../common/Component.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";

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

    appContainer.querySelector('header').appendChild(header);
    appContainer.querySelector('footer').appendChild(footer);

    return appContainer;
  }
}