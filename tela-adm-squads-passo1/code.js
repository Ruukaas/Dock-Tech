//Dynamic List
import { setContainerEl, dynamicList } from "./list-alunos.js"
import { filterByOneKey } from "../assets/code/db/CRUD.js"
import { addEventToElementOnClick, checkCheckboxes, selectedCheckBox } from "../assets/code/DOM/DOM.js"

let arrayAlunos = await filterByOneKey("usuarios","funcao",["Aluno"])
console.log(arrayAlunos)

setContainerEl("containerTrilha")
dynamicList(arrayAlunos, "Squads", "title", "checkbox-style", "next-button-right", "listaTrilhas", "listaItens")

const exitEl = document.querySelector(".exit-button");
const nextEl = document.querySelector(".next-button-right");

async function checkTheCurrentAtivity() {
  let currentObject;
  let currentAtivity = sessionStorage.getItem("update");

  if (currentAtivity != null && currentAtivity != undefined) {
    currentObject = JSON.parse(currentAtivity);
    console.log(currentObject)
    await fillAlunos(currentObject.arrayIDAlunos);

  }
  addEventToElementOnClick(exitEl, backToMainPage);
  nextEl.addEventListener("click", next);
}

checkTheCurrentAtivity()

async function fillAlunos(obj) {
    checkCheckboxes(obj)
}

function backToMainPage() {
  sessionStorage.clear()
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
}


//botton add going to telaTrilha2
function next() {
  setAlunosOfSquad("lista-de-trilhas")
  window.location.href = "../tela-adm-squads-passo2/tela-adm-squads-passo2.html";
}

const setAlunosOfSquad = (idListAlunosEl) => {
    let indicesListAlunosArray = selectedCheckBox(idListAlunosEl)
    let selectedAlunosArrayID = []
    indicesListAlunosArray.forEach(valor => {
      selectedAlunosArrayID.push(arrayAlunos[valor].id)
    })

    sessionStorage.setItem("currentSelectedAlunosArrayID",JSON.stringify(selectedAlunosArrayID))
}