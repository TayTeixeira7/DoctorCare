function onScroll() {
    if(scrollY > 0) {
        navegacao.classList.add('rolagem')
    } else {
        navegacao.classList.remove('rolagem')
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
}).reveal(`#home, #home img, #home .container_numeros, #services, #services header, #services .card, #about, #about header, #about .content`);
