window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

/* Função para mudar a cor da barra de navegação */
function showNavOnScroll() {
        if(scrollY > 0) {
        navegacao.classList.add('rolagem')
    } else {
        navegacao.classList.remove('rolagem')
    } 
}

/* Função para o botão flutuante */
function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function abrirMenu() {
    document.body.classList.add('menu_ativo')
}
function fecharMenu() {
    document.body.classList.remove('menu_ativo')
}

ScrollReveal({
    origin: 'top',  
    distance: '40px', 
    duration: 700,
}).reveal(`#home, #home img, #home .container_numeros, #services, #services header, #services .card, #about, #about header, #about .content, #contact, #contact header, #contact .content`);
