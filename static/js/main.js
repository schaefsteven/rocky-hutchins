console.log("main.js")

const iframes = document.querySelectorAll("iframe")

for (iframe of iframes) {
    iframe.onload = function() {
        this.classList.add("loaded")
    }
}
