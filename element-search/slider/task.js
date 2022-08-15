const switchLeft = document.querySelector(".slider__arrow_prev");
const switchRight = document.querySelector(".slider__arrow_next");
const sliders = Array.from(document.querySelectorAll('.slider__item'));


switchRight.onclick = function () {
  let active = sliders.findIndex((i) => i.className.includes("slider__item_active"));
  sliders[active].className = 'slider__item';
  if (active < sliders.length - 1) {
    active++;
  } else {
    active = 0;
  }
  sliders[active].className = 'slider__item slider__item_active';
};

switchLeft.onclick = function () {
  let active = sliders.findIndex((i) => i.className.includes("slider__item_active"));
  sliders[active].className = 'slider__item';
  if (active > 0) {
    active--;
  } else {
    active = sliders.length - 1;
  }
  sliders[active].className = 'slider__item slider__item_active';
};