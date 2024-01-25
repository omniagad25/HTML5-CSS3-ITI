const addFilter = (element, filter) => {
    element.style.filter = filter;
};

const saturate = document.getElementById("saturate");
const opacity = document.getElementById("opacity");
const invert = document.getElementById("invert");
const sepla = document.getElementById("sepla");
const grayscale = document.getElementById("grayscale");
const imageone = document.getElementById("imageone");

saturate.addEventListener("click", () => addFilter(chipmunksImg, "saturate(30%)"));
opacity.addEventListener("click", () => addFilter(chipmunksImg, "opacity(25%)"));
invert.addEventListener("click", () => addFilter(chipmunksImg, "invert(75%)"));
sepla.addEventListener("click", () => addFilter(chipmunksImg, "sepia(60%)"));
grayscale.addEventListener("click", () => addFilter(chipmunksImg, "grayscale(50%)"));