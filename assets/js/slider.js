document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].style.opacity = "0"; // Esconde a imagem atual
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = "1"; // Mostra a próxima imagem
    }

    // Inicia imediatamente e troca a cada 5s
    setInterval(nextSlide, 7000);
});
