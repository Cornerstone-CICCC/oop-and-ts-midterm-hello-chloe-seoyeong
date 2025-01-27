import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('p');
    footer.innerHTML = `&copy; ${new Date().getFullYear()} All rights reserved.`;

    return footer;
  }
}