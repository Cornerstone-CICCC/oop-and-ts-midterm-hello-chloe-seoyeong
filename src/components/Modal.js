import { Component } from "../common/Component.js";

export class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const modal = document.createElement('div');
    modal.className = "modal-wrap"
    modal.innerHTML = `
      <div class="modal">
        <h2>${this.props.product.title}</h2>
      </div>
      <div class="dim"></dim>
    `

    return modal;
  }
}