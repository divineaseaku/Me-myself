const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const carouselNav = document.querySelector('.carousel_nav');
const dots = Array.from(carouselNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to each other
slide[0].style.left = 0;
slide[1].style.left = slideWidth + 'px';
