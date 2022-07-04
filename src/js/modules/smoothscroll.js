
export const smoothScroll = () => {
	const anchors = document.querySelectorAll('a[href*="#"]');

	anchors.forEach((anchor) => {
		anchor.addEventListener('click', event => {
			event.preventDefault();

			const blockID = anchor.getAttribute('href').substring(1);

			if (document.getElementById(blockID) != null) {
				document.getElementById(blockID).scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});
}
