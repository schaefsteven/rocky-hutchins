// fade-in for iframes to prevent white flash
const iframes = document.querySelectorAll("iframe")

window.onload = function() {
    for (iframe of iframes) {
        iframe.classList.remove("loading")
    }
}

// copy buttons
const copyButtons = document.querySelectorAll(".copy")

copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const content = button.parentNode.querySelector(".copy-target").innerText
        const icon = button.querySelector("i")
        navigator.clipboard.writeText(content)
        button.classList.add("copy-success")
        icon.classList.remove("bi-clipboard2")
        icon.classList.add("bi-clipboard2-check-fill")
        setTimeout(() => {
        button.classList.remove("copy-success")
        icon.classList.remove("bi-clipboard2-check-fill")
        icon.classList.add("bi-clipboard2")
        }, 3000)
    })
})
