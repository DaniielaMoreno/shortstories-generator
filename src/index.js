const form = document.getElementById("storyForm");
const formContainer = document.getElementById("formContainer");
const cloudImg = document.getElementById("cloudImg");
const storyBox = document.getElementById("storyBox");
const shortStory = document.getElementById("shortStory");
const ballBtn = document.getElementById("ballBtn");

function showDream(text) {
	formContainer.classList.add("hidden");
	cloudImg.classList.add("visible");
	storyBox.classList.add("visible");
	ballBtn.classList.add("visible");
	shortStory.textContent = text;
	storyBox.scrollTop = 0;
}

function resetScene() {
	cloudImg.classList.remove("visible");
	storyBox.classList.remove("visible");
	ballBtn.classList.remove("visible");
	shortStory.textContent = "";
	formContainer.classList.remove("hidden");
	document.getElementById("searchInput").value = "";
	document.getElementById("searchInput").focus();
}

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = document.getElementById("searchInput").value;

	// AI API call.
	// When the story is ready, call: showDream(generatedText)
	showDream(
		"This is an example of the text that will appear after the user types a word. The text should not go out of the limits of this cloud. After that, the user can start again by clicking the ball.",
	);
});

ballBtn.addEventListener("click", resetScene);
