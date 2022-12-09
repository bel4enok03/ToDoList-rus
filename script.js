const inputBox = document.querySelector('.inputBox');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click', function () {
	const item = document.createElement('li');
	item.innerText = inputBox.value;
	item.classList.add('toDoAdd');
	toDoContainer.appendChild(item);
	inputBox.value = '';

	item.addEventListener('click', function () {
		item.classList.add('toDoCompleted');
	});
	item.addEventListener('dblclick', function () {
		toDoContainer.removeChild(item);
	});
});

gsap.to('h1', {
	text: 'Мой список дел на день',
	duration: 1.2,
    delay:1,
	ease: 'power1.in',
    
});

gsap.to('.container', {
	duration: 1,
	delay: 3,
	y: 100,
    opacity:1
});

gsap.to('.toDoContainer', {
	duration: 1,
	delay: 2,
	y: 120,
    opacity:1
});
