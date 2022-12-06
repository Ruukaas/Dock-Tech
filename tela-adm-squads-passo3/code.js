import { squad } from "../assets/code/classes/squad.js";
import { add, filterByOneKey, filterByTwoKeys, get, getAll, update } from "../assets/code/db/CRUD.js";
import { setIDObjects } from "../assets/code/db/setIDObjects.js";
import { addEventToElementOnClick, getInputValueByName, getSelectMarked, isInputNull, setOptionsInASelect, setDefaultValueSelect } from "../assets/code/DOM/DOM.js";
import { dynamicList, setContainerEl } from "./list-squad.js"

let arrayAlunosID = JSON.parse(sessionStorage.getItem("currentSelectedAlunosArrayID"))

let arrayMentoresID = JSON.parse(sessionStorage.getItem("currentSelectedMentoresArrayID"))

let arrayInstEmpr = await getAll("inst-empr")
let arrayProgramasResidencia = [{ nome: "Kick Off" }, { nome: "Rise Up" }, { nome: "Grow Up" }]

let alunosArray = []
let mentoresArray = []

let idUpdateObject

//MAYBE TODO - Ao clicar em voltar nessa página, não voltar para a página inicial e sim para a anterior com os dados preenchidos? Caso não dê tempo de voltar com os dados preenchidos apenas voltar para a página anterior sem os dados preenchidos(fill)


await setCurrentArray(arrayAlunosID, alunosArray)
await setCurrentArray(arrayMentoresID, mentoresArray)



setContainerEl("containerTrilha");
dynamicList(mentoresArray, alunosArray);
setOptionsInASelect(arrayInstEmpr, "empresaResponsavel", "nome", "nome");
setOptionsInASelect(arrayProgramasResidencia, "programaResidencia", "nome", "nome");


let nextEl = document.getElementById("ok-button")
let backEl = document.getElementById("back-button")

checkTheCurrentAtivity()

//assets depois
async function getObjectFromID(valor, variavel) {
  let currentAluno = await get(valor, "usuarios")
  variavel.push(currentAluno)
}

async function setCurrentArray(arrayID, variavel) {
  for (const valor of arrayID) {
    await getObjectFromID(valor, variavel)
  }
}

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

function backToMainPage() {
  sessionStorage.clear();
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
}

const onClickInsert = async (operacao) => {
   if(operacao == "cadastro"){
      if (await checkIfProgramaResidenciaAndNumeroSquadAlreadyExists()) {
        alert("Esse número de Squad já está cadastrado nesse programa da residência")
      }
  }
  let currentArrayIDAlunos = arrayAlunosID
  let currentArrayIDMentores = arrayMentoresID
  let currentEmpresaResponsavel = getSelectMarked("empresaResponsavel")
  let currentNumeroSquad = getInputValueByName("numeroSquad")
  let currentProgramaResidencia = getSelectMarked("programaResidencia")
  insertSquad(currentArrayIDAlunos, currentArrayIDMentores, currentEmpresaResponsavel, currentNumeroSquad, currentProgramaResidencia, operacao)

}

function checkTheCurrentAtivity() {
  let currentObject;
  let currentAtivity = sessionStorage.getItem("update");

  if (currentAtivity != null && currentAtivity != undefined) {
    currentObject = JSON.parse(currentAtivity);
    fillSquad(currentObject);
    idUpdateObject = currentObject.id;
    nextEl.addEventListener("click", async () => {
      await onClickInsert("atualizacao");
    });
  } else {

    nextEl.addEventListener("click", async () => {
      await onClickInsert("cadastro");
    });
  }
  addEventToElementOnClick(backEl, backToMainPage);
}

async function fillSquad(obj) {
  let inputSelectEmpresaResponsavel = document.getElementById("empresaResponsavel")
  let inputNumeroSquad = document.getElementsByName("numeroSquad")[0]
  let inputSelectProgramaResidencia = document.getElementById("programaResidencia")

  setDefaultValueSelect(inputSelectEmpresaResponsavel, obj.empresaResponsavel)
  inputNumeroSquad.value = obj.numeroSquad
  setDefaultValueSelect(inputSelectProgramaResidencia, obj.programaResidencia)


}







