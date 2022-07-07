
export const burgerMenu = (nav = 'nav__list', navButton = 'nav__button', navLink = 'nav__link', bodyLock = 0, close = '_close') => {

	const       navClose = nav + close;
	const navButtonClose = navButton + close
	const           body = document.body;
	const           menu = document.querySelector('.' + nav);
	const        menuBtn = document.querySelector('.' + navButton);

	const bodyLocking = (bodyLock, check = 1) => {
		if (bodyLock) {
			if (check) {
				body.classList.remove(bodyLock);
			} else {
				body.classList.toggle(bodyLock);
			}
		} else { }
	}

	if (menu && menuBtn) {

		!menu.classList.contains(navClose) ? menu.classList.add(navClose) : false;

		menuBtn.addEventListener('click', () => {
			menu.classList.toggle(navClose);
			menuBtn.classList.toggle(navButtonClose);
			bodyLocking(bodyLock, 0);
			menuBtn.blur();
		});

		window.addEventListener('click', e => {
			if (!e.target.closest('.' + nav) && !e.target.closest('.' + navButton)) {
				menu.classList.add(navClose);
				menuBtn.classList.remove(navButtonClose);
				bodyLocking(bodyLock);
			}
		});

		menu.querySelectorAll('.' + navLink).forEach(link => {
			link.addEventListener('click', () => {
				menu.classList.add(navClose);
				menuBtn.classList.remove(navButtonClose);
				bodyLocking(bodyLock);
			});
		});
	}
}