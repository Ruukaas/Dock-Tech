//Dynamic List
import { setContainerEl, dynamicList, clearContainerEl } from "./list-instituicoes.js"
import { getAll, del, get } from "../assets/code/db/CRUD.js"

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

function onClickAddInstituição() {
  addEl.addEventListener("click", next);
}

function next() {
  window.location.href = "../tela-adm-instituicoes-cadastro/tela-adm-instituicoes-cadastro.html";
}

const openModal = () => {
  fadeEl.style.display = "flex";
  modalEl.style.display = "flex";
}

const closeModal = () => {
  modalEl.style.display = "none"
  fadeEl.style.display = "none"
}

async function confirmActionModal() {
  del(clickedElementID, "inst-empr")
  await setInstEmpresas()

  closeModal()
  clearContainerEl()
  dynamicList(listInstEmpresas, "Instituicoes/Empresas", "title", "lista-de-trilhas", "itemTrilha")

  openModalAddEvent(arrayDeleteButtons, onClickDelete)
  openModalAddEvent(arrayEditButtons, onClickEdit)

  cleanIDClickedElement()
  
}

const declineActionModal = () => {
  modalEl.style.display = "none";
  fadeEl.style.display = "none";
}

const openModalAddEvent = (buttonHTMLCollection, functionListener) => {
  let buttonsArray = Array.prototype.slice.call(buttonHTMLCollection)
  buttonsArray.forEach(elemento => {
    elemento.addEventListener("click", functionListener)
  })
}

const onClickDelete = (event) => {
  let currentID = getIDClickedElement(event.target.parentNode.parentNode)
  setIDClickedElement(currentID)
  openModal()
}

async function onClickEdit(event) {
  let currentID = getIDClickedElement(event.target.parentNode.parentNode)
  let currentInstEmpr = await get(currentID,"inst-empr")
  console.log(currentInstEmpr)
  sessionStorage.setItem("update", JSON.stringify(currentInstEmpr))
  next()
}

const getIDClickedElement = element => element.getAttribute("id")
const setIDClickedElement = id => {
  clickedElementID = id
}
const cleanIDClickedElement = () => {
  clickedElementID = ""
}

openModalAddEvent(arrayDeleteButtons, onClickDelete)
openModalAddEvent(arrayEditButtons, onClickEdit)

cancelModalEl.addEventListener("click", declineActionModal)
confirmModalEl.addEventListener("click", confirmActionModal)

onClickAddInstituição()