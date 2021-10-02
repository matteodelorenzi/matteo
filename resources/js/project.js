export default class {
    observer
    $elements

    constructor() {
        this.init()
    }

    init(){
        if (!IntersectionObserver) {
            // don't work
        } else {
            this.intersectionObserver()
        }
    }

    intersectionObserver(){
        this.$elements = document.querySelectorAll(".js-project-observer-item")

        const options = {
            root: null,
            rootMargin: "-150px",
            threshold: 1
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const data = JSON.parse(entry.target.getAttribute("data-project"))
                    this.updateDOM(data)
                }
            })
        }, options)

        this.$elements.forEach((target) => {
            this.observer.observe(target)
        })
    }

    updateDOM(data){
        console.log(data)
        const $title = document.querySelector(".js-project-title")
        const $url = document.querySelector(".js-project-url")
        $title.textContent = data.title
        $url.href = ""
    }
}
