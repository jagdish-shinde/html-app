// Define our custom component class
class GreetingComponent extends HTMLElement {
    constructor() {
      super();
      // Create a shadow DOM for encapsulation
      this.attachShadow({ mode: 'open' });
      // Create a template element
      const template = document.createElement('template');
      // Set the template content
      template.innerHTML = `
        <div>
          <h1>Hello, <span id="name"></span>!</h1>
          <p>Welcome to the html app ...</p>
        </div>
      `;
      // Clone the template content into the shadow DOM
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      // Get the span element
      this.nameSpan = this.shadowRoot.querySelector('#name');
    }
  
    // Define a setter for the 'name' attribute
    set name(value) {
      this.setAttribute('name', value);
      this.nameSpan.textContent = value;
    }
  
    // Define a getter for the 'name' attribute
    get name() {
      return this.getAttribute('name');
    }
  
    // Define the observed attributes
    static get observedAttributes() {
      return ['name'];
    }
  
    // Called when an observed attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'name' && oldValue !== newValue) {
        this.nameSpan.textContent = newValue;
      }
    }
  }
  
  // Define our custom element
  customElements.define('greeting-component', GreetingComponent);
  