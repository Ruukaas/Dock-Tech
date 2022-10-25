//Dynamic List
import { setContainerEl, dynamicList } from "../assets/code/list-item.js"
import { allTrilhas } from "./allTrilhas-adm.js"

setContainerEl("containerTrilha")
dynamicList(allTrilhas, "Trilhas", "fonteCinza", "lista-de-trilhas", "itemTrilha")

//elements
let addEl = document.getElementById("addButton");


//botton add going to telaTrilha2
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const closeModalEl = document.getElementById("close");

const next = () => {
  window.location.href = "../telaAdmTrilha2/telaAdmTrilha2.html";
}

const openModal = () => {
  fadeEl.style.display = "flex";
  modalEl.style.display = "flex";
}

const closeModal = () => {
  closeModalEl.onclick = function () {
    modalEl.style.display = "none";
    fadeEl.style.display = "none";
  }
}

const confirmActionModal = () => {
  document.getElementById("modalConfirm").onclick = function () {
    modalEl.style.display = "none";
    fadeEl.style.display = "none";
    //TODO deleter do banco primeiro depois apagar o modal
  }
}

const declineActionModal = () => {
  document.getElementById("modalCancel").onclick = function () {
    modalEl.style.display = "none";
    fadeEl.style.display = "none";
  }
}

const openModalAddEvent = (buttonHTMLCollection, functionListener) => {
  let buttonsArray = Array.prototype.slice.call(buttonHTMLCollection)
  buttonsArray.forEach(elemento => {
    elemento.addEventListener("click", functionListener)
  })
}

openModalAddEvent(document.getElementsByClassName("delete-button"),openModal)


addEl.addEventListener("click", next);