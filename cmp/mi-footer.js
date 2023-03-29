class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Valentin Carrera Montserrat.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
