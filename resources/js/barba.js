import barba from '@barba/core';
import anime from 'animejs/lib/anime.es.js';

export default class {
    constructor() {
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 1
                });
            }
        }];
    }

}