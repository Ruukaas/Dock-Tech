window.onload = (e) => {
    e.preventDefault();
}

var modal = document.getElementById("main-modal");
var button = document.getElementById("enter");

window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "block";
    }
}


//definindo o display pra none novamente
modal.style.display = "none"

button.onclick = () => {
  modal.style.display = "block";
}