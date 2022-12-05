const item = document.getElementsByClassName("erro")

function mudarPagina (){
    window.location.href = 'em-construção.html'
}
for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', mudarPagina);
}