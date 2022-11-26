//Dynamic List
import { setContainerEl, dynamicList, clearContainerEl } from "./list-squads.js"
import { createDivWithID, createDivWithClasses, createTitle, createImage, addEventToHTMLCollectionOnClick, getIDElement } from "../assets/code/DOM/DOM.js"
import { del, get, getAll } from "../assets/code/db/CRUD.js"
import { closeModal, declineActionModal, openModal } from "../assets/code/DOM/modal.js"

let clickedElementID
let listSquads = await getAll("squads")

setContainerEl("containerSquad")
dynamicList(listSquads)

let arrayDeleteButtons = document.getElementsByClassName("delete-button")
let arrayEditButtons = document.getElementsByClassName("edit-button")

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
const cancelModalEl = document.getElementById("modalCancel");
const confirmModalEl = document.getElementById("modalConfirm");

function goToSquadCadastro1Page() {
  window.location.href = "../tela-adm-squads-passo1/tela-adm-squads-passo1.html";
}

async function setSquads() {
  listSquads = await getAll("squads")
}

const confirmActionModal = async () => {
  del(clickedElementID, "squads")
  await setSquads()

  closeModal(modalEl, fadeEl)

  clearContainerEl()
  dynamicList(listSquads)

  addEventToHTMLCollectionOnClick(arrayDeleteButtons, onClickDelete)
  addEventToHTMLCollectionOnClick(arrayEditButtons, onClickEdit)

  //TODO deleter do banco primeiro depois apagar o modal
}

const onClickDelete = (event) => {
  let currentID = getIDElement(event.target.parentNode.parentNode)
  setIDClickedElement(currentID)
  openModal(modalEl, fadeEl)
}

async function onClickEdit(event) {
  let currentID = getIDElement(event.target.parentNode.parentNode)
  let currentSquad = await get(currentID, "squads")
  console.log(currentSquad)
  sessionStorage.clear()
  sessionStorage.setItem("update", JSON.stringify(currentSquad))
  goToSquadCadastro1Page()
}

const setIDClickedElement = id => {
  clickedElementID = id
}

const cleanIDClickedElement = () => {
  clickedElementID = ""
}

addEventToHTMLCollectionOnClick(arrayDeleteButtons, onClickDelete)
addEventToHTMLCollectionOnClick(arrayEditButtons, onClickEdit)

//TODO - limpar o sessionStorage nos outros CRUDS ao clicar no addEl
addEl.addEventListener("click", () => {
  sessionStorage.clear()
  goToSquadCadastro1Page()
});

cancelModalEl.addEventListener("click", () => {
  declineActionModal(modalEl, fadeEl)
})
confirmModalEl.addEventListener("click", confirmActionModal)
