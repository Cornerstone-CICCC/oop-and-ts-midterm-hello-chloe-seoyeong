import { Component } from "../common/Component.js";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.handlModalClose = this.handlModalClose.bind(this);
    this.currentModal = null;
  }

  handlModalClose() {
    // const currentModal = document.querySelector('.modal-wrap');
    this.currentModal.remove();
  }

  render() {
    // const modal = document.createElement('div');
    this.currentModal = document.createElement('div')
    this.currentModal.className = "modal-wrap"
    this.currentModal.innerHTML = `
      <div class="modal">
        <h2>${this.props.product.title}</h2>
        <button class="btn-modal-close">Close</button>
      </div>
      <div class="dim"></dim>
    `
    this.currentModal.querySelector('.btn-modal-close').addEventListener('click', this.handlModalClose)

    return this.currentModal;
  }
}