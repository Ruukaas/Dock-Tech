//Dynamic List
import { setContainerEl, dynamicList } from "./dynamicTrilha.js" 
import { allTrilhas } from "./allTrilhas-adm.js"
import { createModalConfirmDelete } from "../assets/code/DOM/modal.js"

createModalConfirmDelete("Tem certeza que deseja excluir essa trilha","Sim, desejo excluir a trilha", "Não")

setContainerEl("containerTrilha")
dynamicList(allTrilhas, "Trilhas", "fonteCinza", "container-lista", "lista")

//elements
const addEl = document.getElementById("addButton");
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const cancelModalEl =  document.getElementById("modalCancel");
const confirmModalEl = document.getElementById("modalConfirm");

const next = () => {
  window.location.href = "../telaAdmTrilha2/telaAdmTrilha2.html";
}

const openModal = () => {
  fadeEl.style.display = "flex";
  modalEl.style.display = "flex";
}



const confirmActionModal = () => {
    modalEl.style.display = "none";
    fadeEl.style.display = "none";
    //TODO deleter do banco primeiro depois apagar o modal
  
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

openModalAddEvent(document.getElementsByClassName("delete-button"),openModal)


addEl.addEventListener("click", next);
cancelModalEl.addEventListener("click", declineActionModal)
confirmModalEl.addEventListener("click",confirmActionModal)

// const createModal; 