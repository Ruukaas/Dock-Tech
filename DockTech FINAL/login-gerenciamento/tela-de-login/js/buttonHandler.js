import { getAuth, createUserWithEmailAndPassword, signOut, updateEmail, updatePassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import { filterByOneKey } from "../../assets/code/db/CRUD.js";
import { app } from "../../assets/code/db/firebase.js"
import { getInputValueByName } from "../../assets/code/DOM/DOM.js";


window.onload = (e) => {
    e.preventDefault();
}

const button = document.getElementById('enter');
const loadingImg = document.getElementById('loading-image');

const goToTelaInicialUsuario = () => {
    window.location.href = "../tela-gerenciamento/tela-gerenciamento.html"
}

const goToTelaInicialAdministrador = () => {
    window.location.href = "../../adm-perfil/tela-perfil-adm/perfil.html"
}

const goToTelaInicialMentor = () => {
    window.location.href = "../../mentor/tela-perfil-adm/perfil.html"
}

button.addEventListener('click', (e) => {
    if (e.target == button) {
        button.style.display = 'none';
        loadingImg.style.display = 'block';
        setTimeout(async () => {
            const auth = await getAuth(app);
            let email = getInputValueByName("login-mail")
            let password = getInputValueByName("login-password")
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    let currentEmail = user.email
                    let currentUser = await filterByOneKey("usuarios", "email", [currentEmail])
                    currentUser = currentUser[0]
                    console.log(currentUser)
                    switch (currentUser.funcao) {
                        case "Aluno":
                            console.log("aluno")
                            goToTelaInicialUsuario()
                            break
                        case "Mentor":
                            console.log("mentor")
                            goToTelaInicialMentor()
                            break
                        case "Administrador":
                            console.log("adm")
                            goToTelaInicialAdministrador()
                            break
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode + "|" + errorMessage)
                    loadingImg.style.display = "none"
                    button.style.display = 'block';
                });
            // window.location.href = 'password_recover.html'
        }, 1000);
    }
});