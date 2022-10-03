window.onload = (e) => {
    e.preventDefault();
}
button = document.getElementById('enter');
loadingImg = document.getElementById('loading-image');

button.addEventListener('click', (e) => {
    if (e.target == button) {
        button.style.display = 'none';
        loadingImg.style.display = 'block';
        setTimeout( () => {
            //mudar para a página inicial
            window.location.href = 'password_recover.html'
        }, 1000);
    }
});