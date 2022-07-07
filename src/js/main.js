console.log('Hello World');


// const breakPoint = 1399;
// const mediaQuery = window.matchMedia("(max-width: " + breakPoint + "px)");

() => { body.classList.remove('no-js'); }

import * as flsFunctions from "./modules/supportwebp.js";
import { burgerMenu } from "./modules/burgermenu.js";
import { smoothScroll } from "./modules/smoothscroll.js";
import { scrollUp } from "./modules/scrollup.js";

flsFunctions.isWebp();
burgerMenu('navbar__container', 'navbar__button-toggle', 'navbar__button');
smoothScroll();
scrollUp('scrollup', '_show');
