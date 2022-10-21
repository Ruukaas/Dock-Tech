//Dynamic List
import {setContainerEl, dynamicList} from "./list-alunos.js"
import {allAlunos} from "./all-alunos.js"

setContainerEl("containerTrilha")
dynamicList(allAlunos,"Squads","title","checkbox-style","next-button","lista-de-trilhas","itemTrilha")

const exitButton = document.querySelector(".exit-button");

exitButton.onclick = function(){
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
}

//botton add going to telaTrilha2
let nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", next);
function next(){
  window.location.href = "../telaAdmTrilha2/telaAdmTrilha2.html";
}

// Get the modal and fade
const modal = document.getElementById("myModal");
const fade = document.getElementById("fade");

// Get the button that opens the modal
const deleteButton = document.getElementById("deleteButton");

// Get the <span> element that closes the modal
const span = document.getElementById("close");

// When the user clicks on the button, open the modal
// deleteButton.onclick = function() {
//   modal.style.display = "flex";  
//   fade.style.display = "flex";
//   liSelecionada.style.display = "none";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
//   fade.style.display = "none";
// }

document.getElementById("modalDelete").onclick = function() {
  modal.style.display = "none";
  fade.style.display = "none";
}

// document.getElementById("modalCancel").onclick = function() {
//   modal.style.display = "none";
//   fade.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     fade.style.display = "none";
//   }
// }