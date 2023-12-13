let mediaType = "";
let prompt = "";

const key = "82f43b0671f2tb328187o7be4ab620aa";
const context = "Make sure to provide a clear and prescise answer.";
const url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

const description = document.querySelector(".description");

function handleChange() {
 mediaType = mediaElement.value;
 prompt = `What is a good ${mediaType} to watch? Please limit the answer to one item, and provide a brief spoiler free summary of the ${mediaType}.`;
 console.log(prompt);
}

const mediaElement = document.querySelector("#media-type");
mediaElement.addEventListener("change", handleChange);

function handleSubmit(event) {
 event.preventDefault();
 description.innerHTML = "Loading...";
 axios.get(url).then(test);
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function test(response) {
 console.log(response);
}
