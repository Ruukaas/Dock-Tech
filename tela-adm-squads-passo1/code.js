//Dynamic List
import { setContainerEl, dynamicList } from "./list-alunos.js"
import { allAlunos } from "./all-alunos.js"
import { filterByOneParameter } from "../assets/code/DOM/DOM.js"

setContainerEl("containerTrilha")
dynamicList(allAlunos, "Squads", "title", "checkbox-style", "next-button-right", "lista-de-trilhas", "itemTrilha")

const exitEl = document.querySelector(".exit-button");
const nextEl = document.querySelector(".next-button-right");

let arrayAlunos = await filterByOneParameter("usuarios","")

exitEl.onclick = function () {
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
}

//botton add going to telaTrilha2
nextEl.addEventListener("click", next);
function next() {
  window.location.href = "../tela-adm-squads-passo2/tela-adm-squads-passo2.html";
}