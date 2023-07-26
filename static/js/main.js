// Bootstrap imports
// import '/node_modules/bootstrap/js/dist/alert.js';
// import '/node_modules/bootstrap/js/dist/button.js';
// import '/node_modules/bootstrap/js/dist/carousel.js';
import '/node_modules/bootstrap/js/dist/collapse.js';
// import '/node_modules/bootstrap/js/dist/dropdown.js';
// import '/node_modules/bootstrap/js/dist/modal.js';
// import '/node_modules/bootstrap/js/dist/offcanvas.js';
// import '/node_modules/bootstrap/js/dist/popover.js';
// import '/node_modules/bootstrap/js/dist/scrollspy.js';
// import '/node_modules/bootstrap/js/dist/tab.js';
// import '/node_modules/bootstrap/js/dist/toast.js';
// import '/node_modules/bootstrap/js/dist/tooltip.js';

// fade-in for iframes to prevent white flash
const iframes = document.querySelectorAll("iframe")

for (iframe of iframes) {
    iframe.onload = function() {
        this.classList.add("loaded")
    }
}

// utility classes to activate animations once page has finished loading
const waitingElements = document.querySelectorAll(".wait")

function addAnimate() {
    for (el of waitingElements) {
        el.classList.add("animate")
    }
}
window.onload = setTimeout(addAnimate, 500)

