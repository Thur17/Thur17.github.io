function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		return;
	}

	button.innerHTML = darkMode;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);

function typeWriter(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
        textArray.forEach((letra, i) =>{
            setTimeout(() => elemento.innerHTML += letra, 90 * i)
  });
}

const titulo = document.querySelector ('h5');
typeWriter(titulo)