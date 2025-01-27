import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('div');
    header.className = 'flex';
    header.innerHTML = `
      <div>${this.props.siteTitle}</div>
      <nav>
        <menu>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Cart</a>
          </li>
        </menu>
      </nav>
    `;

    return header;
  }
}