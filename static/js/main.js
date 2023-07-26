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

