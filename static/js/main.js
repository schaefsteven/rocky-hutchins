// fade-in for iframes to prevent white flash
const iframes = document.querySelectorAll("iframe")

for (iframe of iframes) {
    iframe.onload = function() {
        this.classList.add("loaded")
    }
}

