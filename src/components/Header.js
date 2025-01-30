import { Component } from "../common/Component.js";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.btnModeToggle = null;
    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange() {
    const productWrap = document.querySelector('.product-wrap');
    const listMode = productWrap.classList.contains("list")

    if(listMode) {
      productWrap.classList.remove('list')
      this.btnModeToggle.classList.remove('list');
      this.btnModeToggle.querySelector('span').innerText = "grid"
    } else {
      productWrap.classList.add('list');
      this.btnModeToggle.classList.add('list')
      this.btnModeToggle.querySelector('span').innerText = "list"
    }
  }

  render() {
    const header = document.createElement('div');
    header.className = 'flex';
    header.innerHTML = `
      <div class="title">${this.props.siteTitle}</div>
      <button class="btn-mode-change">
        <span class="a11y-hidden">grid</span>
      </button>
    `;
    this.btnModeToggle = header.querySelector('.btn-mode-change')
    header.querySelector('.btn-mode-change').addEventListener('click', this.handleModeChange);

    return header;
  }
}