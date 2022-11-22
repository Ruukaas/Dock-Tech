//Dynamic List
import { setContainerEl, dynamicList } from "./list-alunos.js"
import { allAlunos } from "./all-alunos.js"
import { filterByOneKey } from "../assets/code/db/CRUD.js"
import { selectedCheckBox } from "../assets/code/DOM/DOM.js"

let arrayAlunos = await filterByOneKey("usuarios","funcao",["Aluno"])
console.log(arrayAlunos)

setContainerEl("containerTrilha")
dynamicList(arrayAlunos, "Squads", "title", "checkbox-style", "next-button-right", "lista-de-trilhas", "itemTrilha")

const exitEl = document.querySelector(".exit-button");
const nextEl = document.querySelector(".next-button-right");


exitEl.onclick = function () {
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
}

//botton add going to telaTrilha2
nextEl.addEventListener("click", next);
function next() {
  console.log(selectedCheckBox("lista-de-trilhas"))
  // window.location.href = "../tela-adm-squads-passo2/tela-adm-squads-passo2.html";
}