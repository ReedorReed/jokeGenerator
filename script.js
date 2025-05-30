const jokeText = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJokes);

generateJokes();

async function generateJokes() {
	const res = await fetch('https://v2.jokeapi.dev/joke/Programming');
	const data = await res.json();

	let joke = '';
	if (data.joke == undefined) {
		joke = `${data.setup} <br> (${data.delivery})`;
	} else {
		joke = data.joke;
	}
	jokeText.innerHTML = joke;
}
