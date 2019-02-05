window.onload = function () {

	let buttonUp = document.querySelector('.buttonUp');

	function scrollBtn() {
		let scrolled = window.pageYOffset;
		let coords = document.documentElement.clientHeight;
		if (scrolled>coords) {
			buttonUp.classList.add('displayBlock');
		} 
		if (scrolled<coords) {
			buttonUp.classList.remove('displayBlock');
		}
	}
// Рекурсия----переделать!!!

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 20);
		}
	}

	window.addEventListener('scroll', scrollBtn);
	buttonUp.addEventListener('click', backToTop);


	// Плавный скролл по ссылкам

	let link = document.querySelectorAll('.menu a');

	for (let a of link) {
		a.addEventListener('click', function(e) {
			e.preventDefault();

			const blockId = a.getAttribute('href');

			document.querySelector(blockId).scrollIntoView({
				behavior: 'smooth',
      			block: 'start'
			});
		});
	}
	
	let knowMore = document.querySelector('.main .button');
	let skills = document.querySelector('#skills');

	knowMore.addEventListener('click', function (e) {
		e.preventDefault();

		skills.scrollIntoView({
				behavior: 'smooth',
      			block: 'start'
			});
	});
}