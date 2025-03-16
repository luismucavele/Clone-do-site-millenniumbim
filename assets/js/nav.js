window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav"); // Navbar principal
    const miniNav = document.querySelector(".nav-links"); // Mini navbar preta

    if (window.scrollY > 50) { 
        nav.classList.add("scrolled"); // Adiciona a classe para modificar o estilo da navbar principal
        miniNav.style.display = "none"; // Esconde a mini navbar preta
        nav.style.top = "0"; // Move a navbar principal para o topo
    } else {
        nav.classList.remove("scrolled"); // Remove a classe quando rolar para cima
        miniNav.style.display = "flex"; // Reexibe a mini navbar preta
        nav.style.top = "30px"; // Mantém a navbar principal abaixo da mini navbar
    }
});
