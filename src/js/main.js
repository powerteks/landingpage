console.log('Hello World');


// const breakPoint = 1399;
// const mediaQuery = window.matchMedia("(max-width: " + breakPoint + "px)");

() => { body.classList.remove('no-js'); }

import * as flsFunctions from "./modules/supportwebp.js";
import { burgerMenu } from "./modules/burgermenu.js";
import { headerScroll } from "./modules/headerscroll.js";
import Swiper, { Navigation, Autoplay, Keyboard } from 'swiper';
import { smoothScroll } from "./modules/smoothscroll.js";
import { scrollUp } from "./modules/scrollup.js";

flsFunctions.isWebp();
burgerMenu('navbar__container', 'navbar__button-toggle', 'navbar__button');
headerScroll('header');

const slider = new Swiper('.slider', {
	modules: [
		Navigation, Autoplay, Keyboard
	],
	wrapperClass: 'slider__list',
	slideClass  : 'slider__item',
	direction   : 'horizontal',
	slidesPerView: 1,
	loop        : true,
	speed       : 500,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	navigation  : {
		prevEl: '.slider__button_prev',
		nextEl: '.slider__button_next',
	},
	on: {
		init() {
			this.el.addEventListener('mouseenter', () => {
				this.autoplay.stop();
			});

			this.el.addEventListener('mouseleave', () => {
				this.autoplay.start();
			});
		}
	},
	keyboard: {
		enabled       : true,
		onlyInViewport: true,
		pageUpDown    : true,
	},
	watchOverflow: true,
});

smoothScroll();
scrollUp('scrollup', '_show');
