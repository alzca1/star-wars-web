'use strict';

function main () {
    var ENTRY_POINT =  '/';
    var layoutInstance = null; 
    var rootElement = document.querySelector('#root');
    var navbarInstance = null;
    var links = [
        
        {name: 'Home' , 
        url: '/'},
        
        {name: 'Movies', 
        url: '/movies'
        } 
    
    ]
    
generateLayout();
generateNavbar();
addListenersToNavbar(); 
activateRouter();


    function generateLayout() {
        layoutInstance = new Layout(rootElement);
        layoutInstance.generate(); 

    }

    function generateNavbar() {
        navbarInstance = new Navbar(layoutInstance.header, links);
        navbarInstance.generate();
    }

    function activateRouter(){
        RouterInstance.buildDom(ENTRY_POINT, layoutInstance.main);

    }

    function addListenersToNavbar () {
        var anchors = document.querySelectorAll('nav a');
        anchors.forEach(function (anchor) {
            anchor.addEventListener('click', changePage )
        })
    }

    function changePage (event) {
        var url = event.target.attributes.url.value;
        RouterInstance.buildDom(url, layoutInstance.main);
    }
}


window.addEventListener('load', main);