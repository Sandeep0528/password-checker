let pswd = document.querySelector("input")
let msg = document.querySelector("p")
function check(z) {
    if (z.key === "Enter") {
        if (pswd.value.length < 8) {
            msg.textContent = "weak password"
            msg.style.color = "red"
        } else if (pswd.value.length >= 8 && pswd.value.length <= 10) {
            msg.textContent = "good password"
            msg.style.color = "yellow"
        } else {
            msg.textContent = "strong password"
            msg.style.color = "green"
        }
    }

}
