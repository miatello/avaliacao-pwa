let currentSlide = 0;
showSlide(currentSlide);

function showSlide(index) {
    const slides = document.getElementsByClassName("carousel-item");
    if (index >= slides.length) { currentSlide = 0; }
    if (index < 0) { currentSlide = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "block";
}

function changeSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}
