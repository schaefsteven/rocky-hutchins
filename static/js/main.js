// fade-in for iframes to prevent white flash
const iframes = document.querySelectorAll("iframe")

for (iframe of iframes) {
    if (iframe.complete) {
        iframe.classList.add("loaded")
    }
    else {
        iframe.onload = function() {
            this.classList.add("loaded")
        }
    }
}

