//Dynamic List
import {setContainerEl, dynamicList, clearContainerEl} from "./list-usuarios.js"
import { getAll, del, get } from "../assets/code/db/CRUD.js";

let listUsuarios = await getAll("usuarios")
let clickedElementID //local onde vai ser armazenado o ID da trilha clicada para ser deletada ou alterada
   
setContainerEl("containerTrilha")
dynamicList(listUsuarios,"Usuarios","title","lista-de-trilhas","itemTrilha")

const addEl = document.getElementById("addButton");
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const cancelModalEl =  document.getElementById("modalCancel");
const confirmModalEl = document.getElementById("modalConfirm");

let arrayDeleteButtons = document.getElementsByClassName("delete-button")
let arrayEditButtons = document.getElementsByClassName("edit-button")

function next(){
  window.location.href = "../tela-adm-usuarios-cadastro/tela-adm-usuario-cadastro-2.html";
}

async function setUsuarios() {
  listUsuarios = await getAll("usuarios")
  console.log(listUsuarios)
}


const openModal = () => {
  fadeEl.style.display = "flex";
  modalEl.style.display = "flex";
}

async function confirmActionModal() {
  del(clickedElementID, "usuarios");
  modalEl.style.display = "none";
  fadeEl.style.display = "none";
  await setUsuarios()
  clearContainerEl()

  dynamicList(listUsuarios,"Usuarios","title","lista-de-trilhas","itemTrilha")

  openModalAddEvent(arrayDeleteButtons,onClickDelete)
  openModalAddEvent(arrayEditButtons,onClickEdit)

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
  console.log(currentID)
  setIDClickedElement(currentID)
  openModal()
}

async function onClickEdit(event) {
  let currentID = getIDClickedElement(event.target.parentNode.parentNode);
  let currentInstEmpr = await get(currentID, "usuarios");
  sessionStorage.setItem("update", JSON.stringify(currentInstEmpr));
  next();
}

const getIDClickedElement = element => element.getAttribute("id")
const setIDClickedElement = id => {
  clickedElementID = id
}
const cleanIDClickedElement = () => {
  clickedElementID = ""
}

openModalAddEvent(arrayDeleteButtons,onClickDelete)
openModalAddEvent(arrayEditButtons,onClickEdit)

cancelModalEl.addEventListener("click", declineActionModal)
confirmModalEl.addEventListener("click",confirmActionModal)
addEl.addEventListener("click", next);
