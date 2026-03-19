let shortStory = document.querySelector("#shortStory");

function showDream(response) {
	shortStory.innerHTML = response.data.answer;

	formContainer.classList.add("hidden");
	cloudImg.classList.add("visible");
	storyBox.classList.add("visible");
	ballBtn.classList.add("visible");
	shortStory.textContent = text;
	storyBox.scrollTop = 0;
}

function generateDream(event) {
	event.preventDefault();

	let apiKey = "97fab40oeb1c82af2b7390d7e00fac2t";
	let input = document.querySelector("#searchInput");
	let prompt = `Write a very short story about this: ${input.value}`;
	let context =
		"You are a person dreaming of the real world and narrating what is going on in your dream. Stick to telling only one sentence about it. It doesn't have to be meaninful. Don't start by saying 'in my dream'";
	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	shortStory.innerHTML = `Generating short story about ${input.value}`;
	axios.get(apiURL).then(showDream);
}

let form = document.querySelector("#storyForm");
form.addEventListener("submit", generateDream);

const formContainer = document.getElementById("formContainer");
const cloudImg = document.getElementById("cloudImg");
const storyBox = document.getElementById("storyBox");
const ballBtn = document.getElementById("ballBtn");

function resetScene() {
	cloudImg.classList.remove("visible");
	storyBox.classList.remove("visible");
	ballBtn.classList.remove("visible");
	shortStory.textContent = "";
	formContainer.classList.remove("hidden");
	document.getElementById("searchInput").value = "";
	document.getElementById("searchInput").focus();
}

/*{
	const input = document.getElementById("searchInput").value;

	// AI API call.
	// When the story is ready, call: showDream(generatedText)
	showDream();
});*/

ballBtn.addEventListener("click", resetScene);
