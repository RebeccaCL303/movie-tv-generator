let mediaType = "";
let genre = "";
let input = "";

const key = "82f43b0671f2tb328187o7be4ab620aa";
const context = "Make sure to provide a clear and prescise answer.";

const form = document.querySelector("form");
const mediaElement = document.querySelector("#media-type");
const genreElement = document.querySelector("#genre");
const description = document.querySelector(".description");

// handle input change

function handleChange() {
 mediaType = mediaElement.value;
 genre = genreElement.value;
 input = `What is a good ${genre} ${mediaType} to watch? Please limit the answer to one item, and provide a brief spoiler free summary of the ${mediaType}.`;
 console.log(input);
}

mediaElement.addEventListener("change", handleChange);
genreElement.addEventListener("change", handleChange);

// handle submit

function handleSubmit(event) {
 event.preventDefault();
 description.innerHTML = "Loading...";
 const url = `https://api.shecodes.io/ai/v1/generate?prompt=${input}&context=${context}&key=${key}`;
 axios.get(url).then(test);
}

form.addEventListener("submit", handleSubmit);

// response

function test(response) {
 console.log(response);
}
