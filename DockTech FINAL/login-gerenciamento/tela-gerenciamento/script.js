import { getAuth,  signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import { app } from "../assets/code/db/firebase.js";

const item = document.getElementsByClassName("erro")

const logoutEl = document.getElementById("logout")

async function logout() {
    const auth = await getAuth(app);
    await signOut(auth);
    window.location.href = "../tela-de-login/login.html"
}

logoutEl.addEventListener("click",  async () => {
    await logout()
})

function mudarPagina (){
    window.location.href = 'em-construção.html'
}
for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', mudarPagina);
}


