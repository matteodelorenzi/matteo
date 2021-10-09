import ScrollToHash from "./utils/ScrollToHash"
import Project from "./project"
import Router from "./Router"
// import Asscroll from "./asscroll"


// new Asscroll()

document.addEventListener(
    'DOMContentLoaded',
    () => {
        new ScrollToHash()
        new Project()
        Router.init()
    }
)