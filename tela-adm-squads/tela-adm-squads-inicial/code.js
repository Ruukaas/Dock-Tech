//Dynamic List
import {setContainerEl, dynamicList} from "./list-squads.js"
import {allSquads} from "./all-squads.js"

setContainerEl("containerTrilha")
dynamicList(allSquads,"Squads","title","lista-de-trilhas","itemTrilha")


//botton add going to telaTrilha2
let add = document.getElementById("addButton");
add.addEventListener("click", next);
function next(){
  window.location.href = "../tela-adm-squads-passo1/tela-adm-squads-passo1.html";
}

const body = document.getElementsByTagName("body");
// Get the modal and fade
const modal = document.getElementById("myModal");
const fade = document.getElementById("fade");

// Get the button that opens the modal
const deleteButton = document.getElementById("deleteButton");

const confirmDelete = document.getElementById("modalDelete");

let liSelecionada;


const cancelDelete = document.getElementById("modalCancel");

// Get the <span> element that closes the modal
const span = document.getElementById("close");

// When the user clicks on the button, open the modal
deleteButton.onclick = function() {
  modal.style.display = "flex";  
  fade.style.display = "flex";
  liSelecionada.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  fade.style.display = "none";
}

document.getElementById("modalDelete").onclick = function() {
  modal.style.display = "none";
  fade.style.display = "none";
  liSelecionada = deleteButton.parentNode.getElementsByClassName(".itemTrilha");
  console.log(liSelecionada);
  liSelecionada.parentNode.removeChild(liSelecionada);
}

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