const switchLeft = document.querySelector(".slider__arrow_prev");
const switchRight = document.querySelector(".slider__arrow_next");
const sliders = document.querySelectorAll('.slider__item');
let currentSlide = 0;


switchRight.onclick = function () {
  sliders[currentSlide].className = 'slider__item';
  if (currentSlide < sliders.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  sliders[currentSlide].className = 'slider__item slider__item_active';
};

switchLeft.onclick = function () {
  sliders[currentSlide].className = 'slider__item';
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = sliders.length - 1;
  }
  sliders[currentSlide].className = 'slider__item slider__item_active';
};