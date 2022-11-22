//Dynamic List
import {setContainerEl, dynamicList} from "./list-squads.js"
import {allSquads} from "./all-squads.js"
import {createDivWithID, createDivWithClasses, createTitle, createImage} from "../assets/DOM.js"

//teste 4
setContainerEl("containerTrilha")
dynamicList(allSquads,"Squads","title","container-lista","lista")

//create html
let fade = createDivWithID("fade")
let myModal = createDivWithID("myModal");
let itemFlex1 = createDivWithClasses("itemFlex");
let itemFlex2 = createDivWithClasses("itemFlex");
let titleContainer = createDivWithID("title-container");
let titleModal = createTitle("title-modal");
let modalConfirm = createDivWithID("modalConfirm");
let modalCancel = createDivWithID("modalCancel");
let closeBtn = createImage("../assets/global-images/icons8-excluir-480.png", "image");
closeBtn.id = "close"

let divRandom = document.createElement("div");

//appends
document.body.appendChild(fade);
document.body.appendChild(myModal);
myModal.appendChild(itemFlex1);
myModal.appendChild(itemFlex2);
itemFlex1.appendChild(titleContainer);
itemFlex2.appendChild(modalConfirm);
itemFlex2.appendChild(modalCancel);
myModal.appendChild(divRandom);
divRandom.appendChild(closeBtn);
titleContainer.appendChild(titleModal);

titleModal.innerText = "Tem certeza que deseja excluir essa trilha?"
modalConfirm.innerHTML = "Sim, desejo excluir a trilha";
modalCancel.innerHTML = "Não";

// selectors
const addEl = document.getElementById("addButton");
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const closeModalEl = document.getElementById("close");
const cancelModalEl =  document.getElementById("modalCancel");
const confirmModalEl = document.getElementById("modalConfirm");


//botton add going to telaTrilha2
let add = document.getElementById("addButton");
add.addEventListener("click", next);
function next(){
  window.location.href = "../tela-adm-squads-passo1/tela-adm-squads-passo1.html";
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
