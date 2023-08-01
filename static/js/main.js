// fade-in for iframes to prevent white flash
const iframes = document.querySelectorAll("iframe")

window.onload = function() {
    for (iframe of iframes) {
        iframe.classList.add("loaded")
    }
}
