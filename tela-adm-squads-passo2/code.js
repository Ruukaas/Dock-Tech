//Dynamic List
import {setContainerEl, dynamicList} from "./list-mentores.js"
import {allMentores} from "./all-mentores.js"

setContainerEl("containerTrilha")
dynamicList(allMentores,"Squads","title","checkbox-style","next-button","next-button-right","lista-de-trilhas","itemTrilha")

const exitButton = document.querySelector(".exit-button");

exitButton.onclick = function(){
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
}

//Botao next voltando para o passo 1 da criacao
let nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", back);
function back(){
  window.location.href = "../tela-adm-squads-passo1/tela-adm-squads-passo1.html";
}

//Botao next indo para o passo 3 da criacao
let nextButtonRight = document.querySelector(".next-button-right");
nextButtonRight.addEventListener("click", next);
function next(){
  window.location.href = "../tela-adm-squads-passo3/tela-adm-squads-passo3.html";
}

document.getElementById("modalDelete").onclick = function() {
  modal.style.display = "none";
  fade.style.display = "none";
}