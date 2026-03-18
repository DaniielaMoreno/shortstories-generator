function showDream(event) {
	event.preventDefault();

	let shortStory = document.querySelector("#shortStory");
	shortStory.innerHTML = "probando probando";

	formContainer.classList.add("hidden");
	cloudImg.classList.add("visible");
	storyBox.classList.add("visible");
	ballBtn.classList.add("visible");
	shortStory.textContent = text;
	storyBox.scrollTop = 0;
}

let form = document.querySelector("#storyForm");
form.addEventListener("submit", showDream);
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
