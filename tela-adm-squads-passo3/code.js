import { filterByOneKey, get, getAll } from "../assets/code/db/CRUD.js";
import { getInputValueByName, setOptionsInASelect } from "../assets/code/DOM/DOM.js";
import { dynamicList, setContainerEl } from "./list-squad.js"

let arrayAlunosID = JSON.parse(sessionStorage.getItem("currentSelectedAlunosArrayID"))

let arrayMentoresID = JSON.parse(sessionStorage.getItem("currentSelectedMentoresArrayID"))

let arrayInstEmpr = await getAll("inst-empr")
let arrayProgramasResidencia = [{nome:"Kick Off"},{nome:"Rise Up"},{nome:"Grow Up"}]

let alunosArray = []
let mentoresArray = []

async function getObjectFromID(valor, variavel) {
  let currentAluno = await get(valor,"usuarios")
  variavel.push(currentAluno)
}

async function setCurrentAlunos() {
  for(const valor of arrayAlunosID) {
    await getObjectFromID(valor,alunosArray)
  }
}

async function setCurrentMentores() {
  for(const valor of arrayMentoresID) {
    await getObjectFromID(valor,mentoresArray)
  }
}

await setCurrentAlunos()
await setCurrentMentores()

setContainerEl("containerTrilha")
dynamicList(mentoresArray,alunosArray)

setOptionsInASelect(arrayInstEmpr,"empresaResponsavel","nome","nome")
setOptionsInASelect(arrayProgramasResidencia,"programaResidencia","nome","nome")

// document.getElementById("ok-button").addEventListener("click", async () => {
//   let inputValueNumeroSquad = getInputValueByName("numeroSquad")
//   let hasSquadsWithThisNumber = await filterByOneKey("squads","numeroSquad",[inputValueNumeroSquad])
//   if(hasSquadsWithThisNumber.length > 0) {
//     alert("Número de Squad já cadastrado")
//   }
// })