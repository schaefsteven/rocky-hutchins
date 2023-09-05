//When a new admin clicks a email invite link, redirect them to the right place
if (location.hash.startsWith("#invite_token")) {
    console.log("redirecting")
    window.location.href = "/admin/" + location.hash
}
