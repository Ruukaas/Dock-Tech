//Dynamic List
import {setContainerEl, dynamicList} from "./list-usuarios.js"
import {allUsuarios} from "./all-usuarios.js"

setContainerEl("containerTrilha")
dynamicList(allUsuarios,"Squads","title","lista-de-trilhas","itemTrilha")


//botton add going to telaTrilha2
let add = document.getElementById("addButton");
add.addEventListener("click", next);
function next(){
  window.location.href = "../tela-adm-squads-passo1/tela-adm-squads-passo1.html";
}

// Get the modal and fade
const modal = document.querySelector(".myModal");
const fade = document.querySelector(".fade");

// Get the button that opens the modal
const deleteButton = document.querySelector(".delete-button");

// Get the <span> element that closes the modal
const span = document.getElementById("close");

// When the user clicks on the button, open the modal
deleteButton.onclick = function() {
  modal.style.display = "flex";  
  fade.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  fade.style.display = "none";
}

// Fechar modal ao selecionar botao X
document.getElementById("modalCancel").onclick = function() {
  modal.style.display = "none";
  fade.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    fade.style.display = "none";
  }
}

// Fechar modal ao selecionar opcao de excluir trilha
document.getElementById("modalDelete").onclick = function() {
  modal.style.display = "none";
  fade.style.display = "none";
}