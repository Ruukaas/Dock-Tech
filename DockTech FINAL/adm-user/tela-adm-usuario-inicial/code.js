import { getAuth, createUserWithEmailAndPassword, signOut, updateEmail, updatePassword, signInWithEmailAndPassword, deleteUser } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import { setContainerEl, dynamicList, clearContainerEl } from "./list-usuarios.js"
import { getAll, del, get } from "../assets/code/db/CRUD.js";
import { app } from "../assets/code/db/firebase.js";
import { closeModal, createModalConfirmDelete } from "../assets/code/DOM/modal.js";

let listUsuarios = await getAll("usuarios")
let clickedElementID //local onde vai ser armazenado o ID da trilha clicada para ser deletada ou alterada

setContainerEl("containerTrilha")
dynamicList(listUsuarios, "Usuarios", "title", "container-lista", "lista")

createModalConfirmDelete("Tem certeza que deseja excluir esse usuário?","Sim, desejo excluir o usuário","Não")

const addEl = document.getElementById("addButton");
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const cancelModalEl = document.getElementById("modalCancel");
const confirmModalEl = document.getElementById("modalConfirm");

let arrayDeleteButtons = document.getElementsByClassName("delete-button")
let arrayEditButtons = document.getElementsByClassName("edit-button")

function next() {
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

async function delAuthAndStore() {
  let currentUsuario = await get(clickedElementID, "usuarios");
  const auth = await getAuth(app);
  await signInWithEmailAndPassword(auth, currentUsuario.email, currentUsuario.senha).then(async () => {
    await deleteUser(auth.currentUser)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode + "|" + errorMessage)
  });
  await del(clickedElementID, "usuarios");
}

async function confirmActionModal() {
  await delAuthAndStore()
  
  
  await setUsuarios()
  clearContainerEl()
  
  dynamicList(listUsuarios, "Usuarios", "title", "container-lista", "lista")
  
  openModalAddEvent(arrayDeleteButtons, onClickDelete)
  openModalAddEvent(arrayEditButtons, onClickEdit)
  cleanIDClickedElement()
  declineActionModal()
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
  let currentUsuario = await get(currentID, "usuarios");
  sessionStorage.clear()
  sessionStorage.setItem("update", JSON.stringify(currentUsuario));
  next();
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
confirmModalEl.addEventListener("click", () => confirmActionModal())
addEl.addEventListener("click", next);
