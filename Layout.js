'use strict';

function Layout(root, style) {
    this.root = root; 
    this.style = style; 
    this.elements = null;
    this.header = null; 
    this.main = null; 
    this.footer = null; 


}

Layout.prototype.generate = function () {
 // generará elementos del DOM
 this.elements = `
    <header id="site-header"> </header>
    <main id="site-main"> </main>
    <footer id="site-footer"> </footer>
 
 `;

 this.render() // para añadir los elementos en el DOM
 this.getContainers(); 
}


Layout.prototype.render = function () {
    // añadir los elementos al DOM
    this.root.innerHTML = this.elements; 


}


Layout.prototype.getContainers = function () {
    // get header, main y footer del DOM
    this.header = document.querySelector('#site-header');
    this.main = document.querySelector('#site-main');
    this.footer = document.querySelector('#site-footer');
}

