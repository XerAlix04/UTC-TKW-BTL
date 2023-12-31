const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
var slideIndex = 0;
const slideItemWidth = sliderItems[0].offsetWidth;
const slideLength = sliderItems.length;
var posX = 0;
 
nextBtn.addEventListener("click", function () {
    changeSlide(1);
});
  
prevBtn.addEventListener("click", function () {
    changeSlide(-1);
});
    autoNextSlide();
  
function changeSlide(direction) {
    if (direction === 1) {
        if (slideIndex === slideLength - 1) {
            posX = 0;
            slideIndex = 0;
            sliderMain.style = `transform: translateX(${posX}px)`;
            return;
        }
        slideIndex++;
        posX = posX - slideItemWidth;
        sliderMain.style = `transform: translateX(${posX}px)`;
    }   
    else if (direction === -1) {
        if (slideIndex === 0) {
        slideIndex = slideLength - 1;
        posX = -slideItemWidth * (slideLength - 1);
        sliderMain.style = `transform: translateX(${posX}px)`;
        return;
        }
        slideIndex--;
        posX = posX + slideItemWidth;
        sliderMain.style = `transform: translateX(${posX}px)`;
    }
  }
  
function autoNextSlide() {
    setInterval(function () {
        changeSlide(1);
    }, 5000);
  }