//usado 100% de IA para fazer essa parte, já que ainda não vimos esse tipo de linguagem
window.onload = function() {
    var paginaAtual = window.location.pathname.split('/').pop();
    console.log('Página atual:', paginaAtual);

    var links = document.querySelectorAll('.link');
    
    links.forEach(function(link) {
        var linkPagina = link.href.split('/').pop();
        console.log('Link:', link.href, 'Página do link:', linkPagina);

        if (linkPagina === paginaAtual) {
            link.classList.add('ativo'); 
        }
    });
}

