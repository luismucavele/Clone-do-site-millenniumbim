document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let textTitle = document.querySelector(".header_txt h1");
    let textParagraph = document.querySelector(".header_txt p");

    let texts = [
        { title: "Domicilie o seu salário e habilite-se a ganhar 30.000 MZN", paragraph: "Campanha Domiciliação de Salário" },
        { title: "Novos Limites Transaccionais dos Cartões Bancários", paragraph: "Em vigor a partir de 12/02/2025" },
        { title: "O crédito com a primeira prestação paga por nós", paragraph: "Crédito Funcionário Público" },
        { title: "Conquista mais tempo para ti, explora um universo de possibilidades e habilita-te a sorteios para ganhar prémios", paragraph: "Ganha Tempo com o Smart IZI" }
    ];

    let currentSlide = 0;

    // Exibir o primeiro texto corretamente no carregamento
    textTitle.textContent = texts[currentSlide].title;
    textParagraph.textContent = texts[currentSlide].paragraph;

    function nextSlide() {
        slides[currentSlide].style.opacity = "0"; // Esconde a imagem atual
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = "1"; // Mostra a próxima imagem

        // Atualiza o texto
        textTitle.textContent = texts[currentSlide].title;
        textParagraph.textContent = texts[currentSlide].paragraph;
    }

    setInterval(nextSlide, 7000);
});
