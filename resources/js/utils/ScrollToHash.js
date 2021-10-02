export default () => {
    const elements = document.querySelectorAll("a")
    elements.forEach((element) => {
        element.addEventListener("click", (e) => {
            let hash = element.getAttribute("href")
            const regex = new RegExp("#(.*)", "gi")
            if (hash.match("#(.+)")) {
                e.preventDefault()
                hash = hash.replace(regex, "$1")
                const targetElement = document.querySelector("#" + hash)
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" })
                }
            }
        })
    })
}
