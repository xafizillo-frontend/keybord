const elCode = document.querySelector('.keyCode');

window.addEventListener('keyup', event => {
	elCode.textContent = event.keyCode;
	console.log(event.keyCode);
});
