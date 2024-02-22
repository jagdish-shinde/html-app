// JavaScript
const template = document.getElementById('my-template');
const instance = template.content.cloneNode(true);
instance.getElementById('name').textContent = 'World';
document.body.appendChild(instance);
