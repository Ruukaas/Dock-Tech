//Dynamic List
import {setContainerEl, dynamicList} from "./list-squads.js"
import {allSquads} from "./all-squads.js"

setContainerEl("containerTrilha")
dynamicList(allSquads,"Squads","title","lista-de-trilhas","itemTrilha")


//botton add going to telaTrilha2
let add = document.getElementById("addButton");
add.addEventListener("click", next);
function next(){
  window.location.href = "../tela-adm-squads-passo1/tela-adm-squads-passo1.html";
}
const addEl = document.getElementById("addButton");
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const closeModalEl = document.getElementById("close");
const cancelModalEl =  document.getElementById("modalCancel");
const confirmModalEl = document.getElementById("modalConfirm");


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
closeModalEl.addEventListener("click", closeModal)
cancelModalEl.addEventListener("click", declineActionModal)
confirmModalEl.addEventListener("click",confirmActionModal)
