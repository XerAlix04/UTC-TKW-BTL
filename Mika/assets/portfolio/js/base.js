window.onload = function() {
    var navBar1 = document.querySelector('.navbar1');
    var navBar2 = document.querySelector('.navbar2');
    var navBar3 = document.querySelector('.navbar3');
    navBar1.style.opacity = 1;
    navBar2.style.opacity = 1;
    navBar3.style.opacity = 1;
}

const mobileNavButton = document.querySelector('.navtrigger');
const mobileCloseButton = document.querySelector('.navclose');
const Nav = document.querySelector('.nav');

function resizeHandler() {
  if (window.innerWidth <= 480) {
    mobileNavButton.classList.add = 'is__show';
  }
}

window.addEventListener('resize', resizeHandler);
resizeHandler();

function navTrigger(){
    mobileNavButton.setAttribute("data-status", "navopened");
    mobileCloseButton.setAttribute("data-status", "navopened");
    Nav.setAttribute("data-status", "show");
}

document.getElementById("js-navtrigger").addEventListener('click', navTrigger);

function navClose(){
    mobileNavButton.setAttribute("data-status", "navclosed");
    mobileCloseButton.setAttribute("data-status", "navclosed");
    Nav.setAttribute("data-status", "hidden");
}

document.getElementById("js-navclose").addEventListener('click', navClose);

window.addEventListener('scroll', function() {
    var element = document.querySelector('.comm-text');
    var opacity = 1 - window.scrollY / 10;
  
    element.style.opacity = opacity;
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
