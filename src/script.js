let mediaType = "";
let genre = "";
let input = "";
let rating = "";
let extra = "";

const key = "82f43b0671f2tb328187o7be4ab620aa";
const context = "Make sure to provide a clear and prescise answer.";

const form = document.querySelector("form");
const mediaElement = document.querySelector("#media-type");
const genreElement = document.querySelector("#genre");
const ratingElement = document.querySelector("#rating");
const extraElement = document.querySelector("#extra");
const responseElement = document.querySelector("#response");

// handle input change

function handleChange() {
 mediaType = mediaElement.value;
 genre = genreElement.value;
 rating = ratingElement.value;
 extra = extraElement.value;

 input = `Give me a good ${rating} ${genre} ${mediaType} to watch. ${extra}.  Please limit the answer to one item, and provide a brief spoiler free summary of the ${mediaType}.`;
}

mediaElement.addEventListener("change", handleChange);
genreElement.addEventListener("change", handleChange);
ratingElement.addEventListener("change", handleChange);
extraElement.addEventListener("change", handleChange);

// handle submit

function handleSubmit(event) {
 event.preventDefault();
 responseElement.classList.remove("hidden");
 responseElement.classList.add("display");
 description.innerHTML = "Loading...";
 const url = `https://api.shecodes.io/ai/v1/generate?prompt=${input}&context=${context}&key=${key}`;
 axios.get(url).then(showResponse);
}

form.addEventListener("submit", handleSubmit);

// response

function showResponse(response) {
 description.innerHTML = response.data.answer.trim("/");
}
