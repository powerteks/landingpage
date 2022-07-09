export const headerScroll = (classHeader, classFirst) => {

	const header = document.querySelector('.' + classHeader);
	let lastScrollTop = 0;

	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;

		if (scrollDistance > 125) {
			header.classList.add('header_fixed');
		} else {
			header.classList.remove('header_fixed');
		}

		if (scrollDistance === 125) {
			header.classList.add('header__fixed');
		}

		lastScrollTop = scrollDistance;
	});
}
