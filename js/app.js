const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");

let index = 0;
display(index);
function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  //Hay que validar si el slider es mayor al último y así mostrar el primero
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}
function prevSlide() {
  index--;
  //Aquí se valida al contrario del anterior, si el slider es menor al primero y así mostrar el último
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
