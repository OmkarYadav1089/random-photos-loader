const imagecontainerEl = document.querySelector(".image-container"); // Corrected class name
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  const ImgNum = 10; // Number of images to add
  addNewImages(ImgNum);
});

function addNewImages(ImgNum) {
  for (let index = 0; index < ImgNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imagecontainerEl.appendChild(newImgEl);
  }
}
