const image = document.getElementById("image");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let arrImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let currentIndex = 0;

function clickPrevButton() {
  currentIndex = (currentIndex - 1 + arrImages.length) % arrImages.length;
  updateImage();
  prevButtonHidden();
  nextButtonHidden();
}

function clickNextButton() {
  currentIndex = (currentIndex + 1) % arrImages.length;
  updateImage();
  prevButtonHidden();
  nextButtonHidden();
}

function updateImage() {
  image.src = "images/" + arrImages[currentIndex];
}
function nextButtonHidden() {
  if (currentIndex === arrImages.length - 1) {
    nextButton.classList.add("hidden");
  } else {
    nextButton.classList.remove("hidden");
  }
}

function prevButtonHidden() {
  if (currentIndex === 0) {
    prevButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
  }
}

prevButton.addEventListener("click", clickPrevButton);
nextButton.addEventListener("click", clickNextButton);
