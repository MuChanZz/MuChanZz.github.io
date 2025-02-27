document.querySelector('.scroll-down').addEventListener('click', function(event) {
	event.preventDefault();
	const target = document.querySelector('#content');
	target.scrollIntoView({ behavior: 'smooth' });
});

