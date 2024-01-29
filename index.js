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

