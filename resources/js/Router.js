import barba from '@barba/core'
import { gsap } from 'gsap/all'

export default new class Router {

  /**
   * Leave the page.
   * 
   * @param {HTMLElement} container - The current page.
   * @return {Promise<string>} The state of the fadeout.
   */
  leave(container) {
    return new Promise(resolve => {
      gsap.to(container, {
        opacity: 0,
        onComplete: () => resolve('completed')
      })
    })
  }

  /**
   * Enter in the new page.
   * 
   * @param {HTMLElement} container - The new page to load.
   * @return {void} Nothing.
   */
  enter(container) {
    gsap.fromTo(container, {
      opacity: 0
    }, {
      opacity: 1
    })
  }

  /**
   * Initialize the application router.
   * 
   * @return {void} Nothing.
   */
  init() {
    barba.init({
      transitions: [{
        leave: ({ current }) => {
          this.fadeOut = this.leave(current.container)
        },
        enter: async ({ next }) => {
          await this.fadeOut
          this.enter(next.container)
        }
      }]
    })
  }
}