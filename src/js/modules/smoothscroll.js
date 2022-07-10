
export const smoothScroll = (headerOffset, headerOffsetBody, classBody) => {
	const anchors = document.querySelectorAll('a[href*="#"]');

	anchors.forEach((anchor) => {
		anchor.addEventListener('click', event => {
			event.preventDefault();

			const blockID = anchor.getAttribute('href').substring(1);

			if (document.getElementById(blockID) != null) {
				const         element = document.getElementById(blockID);
				const elementPosition = element.getBoundingClientRect().top;
				let         topOffset = 0;
				
				topOffset = (blockID === classBody) ? headerOffsetBody : headerOffset;

				const offsetPosition = elementPosition + window.pageYOffset - topOffset;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
		});
	});
}
