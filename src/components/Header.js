import { Component } from "../common/Component.js";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick() {
    const sample = document.querySelector('.cart-list-wrap');
    console.log(sample);
  }

  render() {
    const header = document.createElement('div');
    header.className = 'flex';
    header.innerHTML = `
      <div>${this.props.siteTitle}</div>
      <button class="link-cart">Cart</button>
    `;

    header.querySelector('.link-cart').addEventListener('click', this.handleLinkClick);

    return header;
  }
}