import { gsap } from 'gsap/all'
import barba from '@barba/core'

export default new class Router {

  #rectangle = document.querySelector('.rectangle')

  /**
   * Leave the page.
   * 
   * @param {HTMLElement} container - The current page.
   * @return {Promise<string>} The state of the fadeout.
   */
  leave(container) {
    const leaving = container.querySelectorAll('.slide-js')
    
    return new Promise(resolve => {
      gsap.timeline()
        .to(this.#rectangle, {
          xPercent: -105,
          ease: 'power3.inOut'
        })
        .to(container, {
          y: '-30px',
          opacity: 0,
          duration: 1.25,
          ease: 'power3.inOut',
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
    const leaving = container.querySelectorAll('.slide-js')
    console.log(leaving)

    gsap.timeline()
      .to(this.#rectangle, {
        xPercent: 0,
        ease: 'power3.inOut'
      })
      .fromTo(container, {
        y: '30px',
        opacity: 0,
        ease: 'power3.inOut'
      }, {
        y: '0px',
        opacity: 1,
        duration: 1.25,
        ease: 'power3.inOut'
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
        },
        once() {
          const loader = document.querySelector('.js-loader')
          gsap.to(loader, {
            opacity: 0,
            delay: 3
          })
        }
      }]
    })
  }
}