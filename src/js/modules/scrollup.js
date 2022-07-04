
export const scrollUp = (classBtn = 'scrollup', active = '_active') => {
	
	const scrollButton = document.querySelector('.' + classBtn);
	const className = classBtn + active;
	
	if (scrollButton) {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 500) {
				scrollButton.classList.contains(className) ? false : scrollButton.classList.add(className);
			} else {
				scrollButton.classList.contains(className) ? scrollButton.classList.remove(className) : false;
			}
		});

		scrollButton .addEventListener('click', event => {
			event.preventDefault();

			if (Math.max(document.body.scrollTop, document.documentElement.scrollTop) > 0) {
				document.querySelector('body').scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
			
			event.target.blur();
		});
	}
	
}
