//Dynamic List
import {setContainerEl, dynamicList} from "./list-instituicoes.js"
import {allUsuarios} from "./all-instituicoes.js"

setContainerEl("containerTrilha")
dynamicList(allUsuarios,"Instituicoes/Empresas","title","lista-de-trilhas","itemTrilha")

let add = document.getElementById("addButton");
add.addEventListener("click", next);
function next(){
  window.location.href = "../tela-adm-usuarios-cadastro/tela-adm-usuario-cadastro.html";
}
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const cancelModalEl =  document.getElementById("modalCancel");
const confirmModalEl = document.getElementById("modalConfirm");


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

   
cancelModalEl.addEventListener("click", declineActionModal)
confirmModalEl.addEventListener("click",confirmActionModal)
