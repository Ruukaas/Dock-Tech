//Dynamic List
import { setContainerEl, dynamicList, clearContainerEl } from "./dynamicTrilha.js"
import { allTrilhas } from "./allTrilhas-adm.js"
import { closeModal, createModalConfirmDelete, declineActionModal, openModal } from "../assets/code/DOM/modal.js"
import { del, getAll } from "../assets/code/db/CRUD.js"
import { addEventToHTMLCollectionOnClick, getIDElement } from "../assets/code/DOM/DOM.js"

createModalConfirmDelete("Tem certeza que deseja excluir essa trilha", "Sim, desejo excluir a trilha", "Não")

let currentTrilhas = await getAll("trilhas")
let clickedElementID //local onde vai ser armazenado o ID da trilha clicada para ser deletada ou alterada


setContainerEl("containerTrilha")
dynamicList(currentTrilhas, "Trilhas", "fonteCinza", "container-lista", "lista")

//elements
const addEl = document.getElementById("addButton");
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const cancelModalEl = document.getElementById("modalCancel");
const confirmModalEl = document.getElementById("modalConfirm");

let arrayDeleteButtons = document.getElementsByClassName("delete-button")
let arrayEditButtons = document.getElementsByClassName("edit-button")

const next = () => {
  window.location.href = "../telaAdmTrilha2/telaAdmTrilha2.html";
}

const setTrilhas = async () => {
  currentTrilhas = await getAll("trilhas")
}

const confirmActionModal = async () => {

  await del(clickedElementID,"trilhas")
  await setTrilhas()

  closeModal(modalEl,fadeEl)
  
  clearContainerEl()
  dynamicList(currentTrilhas, "Trilhas", "fonteCinza", "container-lista", "lista")

  addEventToHTMLCollectionOnClick(arrayDeleteButtons, onClickDelete)
  
  cleanIDClickedElement()

  
  //TODO deleter do banco primeiro depois apagar o modal
}



const setIDClickedElement = id => {
  clickedElementID = id
}

const cleanIDClickedElement = () => {
  clickedElementID = ""
}

const onClickDelete = (event) => {
  let currentID = getIDElement(event.target.parentNode.parentNode)
  setIDClickedElement(currentID)
  openModal(modalEl,fadeEl)
}

addEventToHTMLCollectionOnClick(arrayDeleteButtons, onClickDelete)


addEl.addEventListener("click", next);
cancelModalEl.addEventListener("click", declineActionModal)
confirmModalEl.addEventListener("click", confirmActionModal)

// const createModal; 