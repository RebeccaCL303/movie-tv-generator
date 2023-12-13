const key = "82f43b0671f2tb328187o7be4ab620aa";
const prompt =
 "What is a good mystery movie to watch? Please limit the answer to one movie.";
const context = "Make sure to provide a clear and prescise answer.";
const url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

const description = document.querySelector(".description");
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
 event.preventDefault();
 description.innerHTML = "Loading...";
}
