//Dynamic List
import {setContainerEl, dynamicList} from "./list-alunos.js"
import {allAlunos} from "./all-alunos.js"

setContainerEl("containerTrilha")
dynamicList(allAlunos,"Squads","title","checkbox-style","next-button-right","lista-de-trilhas","itemTrilha")

const exitButton = document.querySelector(".exit-button");

exitButton.onclick = function(){
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
}

//botton add going to telaTrilha2
let nextButton = document.querySelector(".next-button-right");
nextButton.addEventListener("click", next);
function next(){
  window.location.href = "../tela-adm-squads-passo2/tela-adm-squads-passo2.html";
}