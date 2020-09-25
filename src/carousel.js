const track = document.querySelector('.carousel .carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel .carousel_right');
const previousButton = document.querySelector('.carousel .carousel_left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const temoignage_track = document.querySelector('.temoignage .carousel .carousel_track');
const temoignage_slides = Array.from(temoignage_track.children);
const temoignage_nextButton = document.querySelector('.temoignage .carousel .carousel_right');
const temoignage_previousButton = document.querySelector('.temoignage .carousel .carousel_left');
const temoignage_dotsNav = document.querySelector('.temoignage .carousel_nav');
const temoignage_dots = Array.from(temoignage_dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
//arrange the slides next
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);
temoignage_slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}
const updateDots = (currentDot, targetDot) => {
    targetDot.classList.add('current-slide');
    currentDot.classList.remove('current-slide');
}

const hideShowArrow = (index) => {
    if (index === 0) {
        previousButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (index === slides.length - 1) {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

const temoignage_hideShowArrow = (index) => {
    if (index === 0) {
        temoignage_previousButton.classList.add('is-hidden');
        temoignage_nextButton.classList.remove('is-hidden');
    } else if (index === slides.length - 1) {
        temoignage_previousButton.classList.remove('is-hidden');
        temoignage_nextButton.classList.add('is-hidden');
    } else {
        temoignage_previousButton.classList.remove('is-hidden');
        temoignage_nextButton.classList.remove('is-hidden');
    }
}

//when i click right move right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const targetIndex = slides.findIndex(slide => slide === nextSlide)
    //move to next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrow(targetIndex);
})
//when i click left move slides to the left 
previousButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const previousDot = currentDot.previousElementSibling;
    const targetIndex = slides.findIndex(slide => slide === previousSlide)

    moveToSlide(track, currentSlide, previousSlide);
    updateDots(currentDot, previousDot);
    hideShowArrow(targetIndex);
})
//when iclic nav , move to that slide
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    const currentDot = dotsNav.querySelector('.current-slide');
    if (!targetDot || currentDot === targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    hideShowArrow(targetIndex)
})

temoignage_nextButton.addEventListener('click', e => {
    const currentSlide = temoignage_track.querySelector('.temoignage .current-slide');
    console.log(currentSlide)
    const nextSlide = currentSlide.nextElementSibling;

    const currentDot = temoignage_dotsNav.querySelector('.temoignage .current-slide');
    const nextDot = currentDot.nextElementSibling;
    const targetIndex = temoignage_slides.findIndex(slide => slide === nextSlide)
    //move to next slide
    moveToSlide(temoignage_track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    temoignage_hideShowArrow(targetIndex);
})

temoignage_previousButton.addEventListener('click', e => {
    const currentSlide = temoignage_track.querySelector('.temoignage .current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = temoignage_dotsNav.querySelector('.temoignage .current-slide');
    const previousDot = currentDot.previousElementSibling;
    const targetIndex = temoignage_slides.findIndex(slide => slide === previousSlide)

    moveToSlide(temoignage_track, currentSlide, previousSlide);
    updateDots(currentDot, previousDot);
    temoignage_hideShowArrow(targetIndex);
})

temoignage_dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    const currentDot = temoignage_dotsNav.querySelector('.temoignage .current-slide');
    if (!targetDot || currentDot === targetDot) return;

    const currentSlide = temoignage_track.querySelector('.temoignage .current-slide');
    const targetIndex = temoignage_dots.findIndex(dot => dot === targetDot)
    const targetSlide = temoignage_slides[targetIndex];

    moveToSlide(temoignage_track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    temoignage_hideShowArrow(targetIndex)
})