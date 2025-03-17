window.revelar = ScrollReveal({reset:false, mobile: false})

ScrollReveal().reveal('.header_txt', {
    duration: 1000, // Ajustado para 1.8s (mais natural)
    distance: '70px', // Reduzi a distância para menos deslocamento
    origin: 'top',
    delay: 1000, // Menos delay para aparecer mais cedo
    opacity: 0,
    easing: 'ease-in-out',
   
});


