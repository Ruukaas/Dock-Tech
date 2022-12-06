//Dynamic List
import {setContainerEl, dynamicList} from "./list-mentores.js"
import {allMentores} from "./all-mentores.js"
import { filterByOneKey } from "../assets/code/db/CRUD.js"
import { addEventToElementOnClick, checkCheckboxes, selectedCheckBox } from "../assets/code/DOM/DOM.js"

let arrayMentores = await filterByOneKey("usuarios","funcao",["Mentor"])


setContainerEl("containerTrilha")
dynamicList(arrayMentores,"Squads","title","checkbox-style","next-button","next-button-right","listaTrilhas","listaItens")

const exitButtonEl = document.querySelector(".exit-button");

//Botao next indo para o passo 3 da criacao
let nextButtonRight = document.querySelector(".next-button-right");

//Botao next voltando para o passo 1 da criacao
let nextButton = document.querySelector(".next-button");

function backToMainPage() {
  sessionStorage.clear()
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
}

async function checkTheCurrentAtivity() {
  let currentObject;
  let currentAtivity = sessionStorage.getItem("update");

  if (currentAtivity != null && currentAtivity != undefined) {
    currentObject = JSON.parse(currentAtivity);
    console.log(currentObject)
    await fillMentores(currentObject.arrayIDMentores);
  }
  addEventToElementOnClick(exitButtonEl, backToMainPage);
  nextButtonRight.addEventListener("click", next);
  nextButton.addEventListener("click", back);
}

async function fillMentores(obj) {
  checkCheckboxes(obj)
}


function back(){
  window.location.href = "../tela-adm-squads-passo1/tela-adm-squads-passo1.html";
}
function next(){
  setMentoresOfSquad("listaTrilhas")
  window.location.href = "../tela-adm-squads-passo3/tela-adm-squads-passo3.html";
}

const setMentoresOfSquad = (idListMentoresEl) => {
  let indicesListMentoresArray = selectedCheckBox(idListMentoresEl)
    let selectedMentoresArrayID = []
    indicesListMentoresArray.forEach(valor => {
      selectedMentoresArrayID.push(arrayMentores[valor].id)
    })

    sessionStorage.setItem("currentSelectedMentoresArrayID",JSON.stringify(selectedMentoresArrayID))
}

checkTheCurrentAtivity()