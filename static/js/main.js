// fade-in for iframes to prevent white flash
const iframes = document.querySelectorAll("iframe")

window.onload = function() {
    for (iframe of iframes) {
        iframe.classList.add("loaded")
    }
}

const copyButtons = document.querySelectorAll(".copy")

copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const content = button.parentNode.querySelector(".copy-target").innerText
        navigator.clipboard.writeText(content)
    })
})
