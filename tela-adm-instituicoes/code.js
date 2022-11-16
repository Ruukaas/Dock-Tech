//Dynamic List
import { setContainerEl, dynamicList, clearContainerEl } from "./list-instituicoes.js"
import { getAll, del, get } from "../assets/code/db/CRUD.js"
import { addEventToElementOnClick, addEventToHTMLCollectionOnClick, getIDElement } from "../assets/code/DOM/DOM.js"
import { openModal, closeModal, declineActionModal } from "../assets/code/DOM/modal.js"

let listInstEmpresas = await getAll("inst-empr")
let clickedElementID //local onde vai ser armazenado o ID da trilha clicada para ser deletada ou alterada

setContainerEl("containerTrilha")
dynamicList(listInstEmpresas, "Instituicoes/Empresas", "title", "lista-de-trilhas", "itemTrilha")

const addEl = document.getElementById("addButton");
console.log(document.getElementById("addButton"))
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const cancelModalEl = document.getElementById("modalCancel");
const confirmModalEl = document.getElementById("modalConfirm");

let arrayDeleteButtons = document.getElementsByClassName("delete-button")
let arrayEditButtons = document.getElementsByClassName("edit-button")

async function setInstEmpresas() {
  listInstEmpresas = await getAll("inst-empr")
  console.log(listInstEmpresas)
}

function goToInstituicoesCadastroPage() {
  window.location.href = "../tela-adm-instituicoes-cadastro/tela-adm-instituicoes-cadastro-2.html";
}

async function confirmActionModal() {
  del(clickedElementID, "inst-empr")
  await setInstEmpresas()

  closeModal(modalEl,fadeEl)
  clearContainerEl()
  dynamicList(listInstEmpresas, "Instituicoes/Empresas", "title", "lista-de-trilhas", "itemTrilha")

  addEventToHTMLCollectionOnClick(arrayDeleteButtons, onClickDelete)
  addEventToHTMLCollectionOnClick(arrayEditButtons, onClickEdit)

  cleanIDClickedElement()
}

const onClickDelete = (event) => {
  let currentID = getIDElement(event.target.parentNode.parentNode)
  setIDClickedElement(currentID)
  openModal(modalEl,fadeEl)
}

async function onClickEdit(event) {
  let currentID = getIDElement(event.target.parentNode.parentNode)
  let currentInstEmpr = await get(currentID, "inst-empr")
  console.log(currentInstEmpr)
  sessionStorage.setItem("update", JSON.stringify(currentInstEmpr))
  goToInstituicoesCadastroPage()
}

const setIDClickedElement = id => {
  clickedElementID = id
}

const cleanIDClickedElement = () => {
  clickedElementID = ""
}

addEventToHTMLCollectionOnClick(arrayDeleteButtons, onClickDelete)
addEventToHTMLCollectionOnClick(arrayEditButtons, onClickEdit)

cancelModalEl.addEventListener("click", () => {
  declineActionModal(modalEl,fadeEl)
})
confirmModalEl.addEventListener("click", confirmActionModal)

addEventToElementOnClick(addEl, goToInstituicoesCadastroPage)