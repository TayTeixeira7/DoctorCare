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
    origin: 'top',  /* vai se movimentar no sentido do topo para baixo */
    distance: '30px', /* vai se movimentar 30px */
    duration: 700, /* vai durar 700ms para mostrar*/
}).reveal('#home');
