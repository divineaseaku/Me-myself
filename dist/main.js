
//for carousel
const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const carouselNav = document.querySelector('.carousel_nav');
const dots = Array.from(carouselNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to each other with a loop
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

//update the dots
const updateDots = (currentDot, targetDot )=> {
  currentDot.classList.remove('active-slide');
  targetDot.classList.add('active-slide');
}
//hide or show the prev and next buttons
const updateArrowButtons = (slides, prevButton, nextButton, targetIndex ) => {
  if(targetIndex ===0){
    prevButton.classList.add('disabled');
    nextButton.classList.remove('disabled');
  }else if(targetIndex === slides.length -1){
    nextButton.classList.add('disabled');
    prevButton.classList.remove('disabled');
  }else{
    nextButton.classList.remove('disabled');
    prevButton.classList.remove('disabled');
  }
}

//move the slide to the left
nextButton.addEventListener('click', e => {
  //get the current slide
  const currentSlide = track.querySelector('.active-slide');
  //get the next slide
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;
  //move to next slide
  track.style.transform = 'translateX(-' + amountToMove + ')';
  //update the dots
  const currentDot = carouselNav.querySelector('.active-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide); 

  updateArrowButtons(slides, prevButton, nextButton, nextIndex);
  updateDots(currentDot, nextDot);
  //update the active slide
  currentSlide.classList.remove('active-slide');
  nextSlide.classList.add('active-slide');
});

//move the slide to the right
prevButton.addEventListener('click', e => {
  //get the current slide
  const currentSlide = track.querySelector('.active-slide');
  //get the next slide
  const prevSlide = currentSlide.previousElementSibling;
  const amountToMove = prevSlide.style.left;
  //move to next slide
  track.style.transform = 'translateX(-' + amountToMove + ')';
  //update the dots
  const currentDot = carouselNav.querySelector('.active-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  updateDots(currentDot, prevDot);
  //update the active slide
  currentSlide.classList.remove('active-slide');
  prevSlide.classList.add('active-slide');
  updateArrowButtons(slides, prevButton, nextButton, prevIndex);

});

// set up the dots and 
carouselNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentSlide = track.querySelector('.active-slide');
  const currentDot = carouselNav.querySelector('.active-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  const amountToMove = targetSlide.style.left;
  //move to next slide
  track.style.transform = 'translateX(-' + amountToMove + ')';
  //update the active slide
  currentSlide.classList.remove('active-slide');
  targetSlide.classList.add('active-slide');
 // update dots
  updateDots(currentDot, targetDot);
  updateArrowButtons(slides, prevButton, nextButton, targetIndex);

});

// for side-menu
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '290px';
  document.getElementById('side-menu').style.display = 'block';
   
}
  function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0px';
  }



