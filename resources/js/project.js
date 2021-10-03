export default class {
    observer
    $elements

    constructor() {
        this.$next = document.querySelector(".js-project-next")
        this.$elements = document.querySelectorAll(".js-project-observer-item")

        this.init()
        this.next()
    }

    init(){
        if (!IntersectionObserver) {
            // don't work
        } else {
            this.intersectionObserver()
        }
    }

    next(){
        if(this.$next){
            this.$next.addEventListener("click", (e) => {
                const item = e.currentTarget
                const index = parseInt(item.getAttribute("data-index"))

                if(index >= this.$elements.length - 1){
                    this.$elements[0].scrollIntoView({ behavior: "smooth", block: "center"})
                }else{
                    item.setAttribute("data-index", index + 1)
                    this.$elements[index + 1].scrollIntoView({ behavior: "smooth", block: "center"})
                }
            })
        }
    }

    intersectionObserver(){
        const options = {
            root: null,
            rootMargin: "0px",
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
        const $title = document.querySelector(".js-project-title")
        const $url = document.querySelector(".js-project-url")
        const $category = document.querySelector(".js-project-category")
        $title.textContent = data.title
        $category.textContent = data.category
        $url.href = data.url
        this.$next.setAttribute("data-index", data.index)
    }
}
