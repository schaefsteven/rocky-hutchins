const UA = navigator.userAgent

chooseInstructions()

function chooseInstructions() {
    const instructionsID = detectUserAgent()
    document.querySelector("#default-instructions").classList.add("d-none")
    document.querySelector(instructionsID).classList.remove("d-none")
}

function detectUserAgent() {
    let id = "#default-instructions"
    if (UA.includes("Mobile")) {
        if (UA.includes("iPhone")) {
            id = "#ios-safari"
        }
        else if (UA.includes("Firefox")) {
            id = "#android-firefox"
        }
        else if (UA.includes("Chrome")) {
            id = "#android-chrome"
        }
    }
    return id
}
