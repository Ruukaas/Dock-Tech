import { squad } from "../assets/code/classes/squad.js";
import { add, filterByOneKey, filterByTwoKeys, get, getAll, update } from "../assets/code/db/CRUD.js";
import { setIDObjects } from "../assets/code/db/setIDObjects.js";
import { addEventToElementOnClick, getInputValueByName, getSelectMarked, isInputNull, setOptionsInASelect } from "../assets/code/DOM/DOM.js";
import { dynamicList, setContainerEl } from "./list-squad.js"

let arrayAlunosID = JSON.parse(sessionStorage.getItem("currentSelectedAlunosArrayID"))

let arrayMentoresID = JSON.parse(sessionStorage.getItem("currentSelectedMentoresArrayID"))

let arrayInstEmpr = await getAll("inst-empr")
let arrayProgramasResidencia = [{ nome: "Kick Off" }, { nome: "Rise Up" }, { nome: "Grow Up" }]

let alunosArray = []
let mentoresArray = []

let idUpdateObject

await setCurrentAlunos()
await setCurrentMentores()

setContainerEl("containerTrilha")
dynamicList(mentoresArray, alunosArray)

const nextEl = document.getElementById("ok-button")
const backEl = document.getElementById("back-button")

async function getObjectFromID(valor, variavel) {
  let currentAluno = await get(valor, "usuarios")
  variavel.push(currentAluno)
}

async function setCurrentAlunos() {
  for (const valor of arrayAlunosID) {
    await getObjectFromID(valor, alunosArray)
  }
}

async function setCurrentMentores() {
  for (const valor of arrayMentoresID) {
    await getObjectFromID(valor, mentoresArray)
  }
}


setOptionsInASelect(arrayInstEmpr, "empresaResponsavel", "nome", "nome")
setOptionsInASelect(arrayProgramasResidencia, "programaResidencia", "nome", "nome")

async function checkIfProgramaResidenciaAndNumeroSquadAlreadyExists() {
  let currentProgramaResidencia = getSelectMarked("programaResidencia")
  let currentNumeroSquad = getInputValueByName("numeroSquad")
  console.log(currentNumeroSquad)
  console.log(currentProgramaResidencia)
  let squadsAnswer = await filterByTwoKeys("squads", "programaResidencia", currentProgramaResidencia, "numeroSquad", currentNumeroSquad)
  console.log(squadsAnswer)
  if (squadsAnswer.length > 0) {
    console.log("true")
    return true
  }
  else {
    console.log("false")
    return false
  }
}

async function insertSquad(arrayIDAlunos, arrayIDMentores, empresaResponsavel, numeroSquad, programaResidencia, operacao) {
  if (!isInputNull(numeroSquad)) {
    let insert
    let msg
    let currentSquad = new squad(arrayIDAlunos, arrayIDMentores, empresaResponsavel, numeroSquad, programaResidencia)
    switch (operacao) {
      case "cadastro":
        insert = await add(currentSquad, "squads")
        msg = "Cadastro realizado com sucesso"
        break
      case "atualizacao":
        currentSquad = setIDObjects(currentSquad, idUpdateObject)
        insert = await update(currentSquad, "squads")
        msg = "Alteração realizada com sucesso"
        break
    }
    if (insert == "sucesso") {
      alert(msg) //Colocar um modal aqui depois
      backToMainPage()
    }
  }
}

const backToMainPage = () => {
  sessionStorage.clear()
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html"
}

const onClickInsert = async (operacao) => {
  if (!(await checkIfProgramaResidenciaAndNumeroSquadAlreadyExists())) {
    let currentArrayIDAlunos = arrayAlunosID
    let currentArrayIDMentores = arrayMentoresID
    let currentEmpresaResponsavel = getSelectMarked("empresaResponsavel")
    let currentNumeroSquad = getInputValueByName("numeroSquad")
    let currentProgramaResidencia = getSelectMarked("programaResidencia")
    insertSquad(currentArrayIDAlunos,currentArrayIDMentores,currentEmpresaResponsavel,currentNumeroSquad,currentProgramaResidencia,operacao)
  } else {
    alert("Esse número de Squad já está cadastrado nesse programa da residência")
  }
}

const checkTheCurrentAtivity = () => {
  let currentObject
  let currentAtivity = sessionStorage.getItem("update")

  if (currentAtivity != null && currentAtivity != undefined) {
      currentObject = JSON.parse(currentAtivity)
      fillInstEmpr(currentObject)
      idUpdateObject = currentObject.id
      nextEl.addEventListener("click", async () => {
          await onClickInsert("atualizacao")
      })
  } else {
      nextEl.addEventListener("click", async () => {
          await onClickInsert("cadastro")
      })
  }
  addEventToElementOnClick(backEl, backToMainPage)
}

checkTheCurrentAtivity()



