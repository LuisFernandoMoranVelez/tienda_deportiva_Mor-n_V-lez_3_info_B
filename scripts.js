const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide() {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
}

// Cambia de imagen cada 4 segundos
setInterval(changeSlide, 4000);