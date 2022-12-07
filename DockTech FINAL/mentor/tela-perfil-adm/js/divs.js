import { getAuth,  signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import { app } from "../../assets/code/db/firebase.js";
//abre o conteúdo

import { addEventToHTMLCollectionOnClick } from "../../assets/code/DOM/DOM.js";
import { closeModal, createModalSquadView, openModal } from "../../assets/code/DOM/modal.js";

createModalSquadView()
function toggleClick(content) {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

//fecha todos 
function closeAllOpen() {
  const buttons = document.getElementsByClassName('open-button');
  for (const btn of buttons) {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      toggleClick(btn.nextElementSibling);
    }
  }
}

const buttons = document.getElementsByClassName('hasContent');
for (const btn of buttons) {
  btn.addEventListener('click', function () {
    //se a div estiver com active, fecha todas as outras divs
    if (!this.classList.contains('active')) {
      closeAllOpen();
    }
    this.classList.toggle('active');
    toggleClick(this.nextElementSibling);
  });
}

const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const closeModalEl = document.getElementById("closeModal")

let titlesEl = document.getElementById("divSquads").getElementsByTagName("p")
addEventToHTMLCollectionOnClick(titlesEl, () => {
  openModal(modalEl,fadeEl)
})

closeModalEl.addEventListener("click", () => {
  closeModal(modalEl,fadeEl)
})

const item = document.getElementsByClassName("erro")

const logoutEl = document.getElementsByClassName("options-exit")[0]

async function logout() {
    const auth = await getAuth(app);
    await signOut(auth);
    window.location.href = "../../login-gerenciamento/tela-de-login/login.html"
}

logoutEl.addEventListener("click",  async () => {
    await logout()
})