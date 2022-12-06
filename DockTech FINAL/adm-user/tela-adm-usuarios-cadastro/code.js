import { getAuth, createUserWithEmailAndPassword, signOut, updateEmail, updatePassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import { createOption, getSelectMarked, isInputNull, getInputValueByName, setDefaultValueSelect, setOptionsInASelect } from "../assets/code/DOM/DOM.js"
import { getAll, add, update, filterByOneKey } from "../assets/code/db/CRUD.js"
import { usuario } from "../assets/code/classes/usuario.js"
import { setIDObjects } from "../assets/code/db/setIDObjects.js"
import { app } from "../assets/code/db/firebase.js"

const back = document.getElementById("back")
const next = document.getElementById("ok")

//TODO aqui e nas outras, quando for um update e não um cadastro trocar o titulo da página para indicar a ação de update
let arrayInstEmpresas
let idUpdateObject
function backToMainPage() {
    sessionStorage.clear()
    window.location.href = "../tela-adm-usuario-inicial/tela-adm-usuario.html"
}

async function getListInstEmpresas() {
    arrayInstEmpresas = await getAll("inst-empr")
}

async function insertAuthUsuario(email, senha, authEmail, authSenha, operacao) {
    const auth = await getAuth(app);
    switch (operacao) {
        case "cadastro":
            console.log("cadasto")
            await createUserWithEmailAndPassword(auth, email, senha)
                .then(() => {
                    // Signed in 
                    signOut(auth)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    alert(errorCode + "|" + errorMessage)
                });
            break
        case "atualizacao":
            console.log("att")
            await signInWithEmailAndPassword(auth, authEmail, authSenha).then(async () => {
                console.log(auth.currentUser)
                await updateEmail(auth.currentUser, email)
            })
                .then(async () => {
                    await updatePassword(auth.currentUser, senha)
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorCode + "|" + errorMessage)
                });
            break
    }
}

async function insertUsuario(nome, email, funcao, instituicaoEmpresa, senha, operacao) {
    let insert
    let msg
    let currentUsuario = new usuario(nome, email, funcao, instituicaoEmpresa, senha) //Se der tempo, colocar referencia ao documento de instEmpr(não vai dar)

    switch (operacao) {
        case "cadastro":
            console.log("cadasto fb")
            insert = await add(currentUsuario, "usuarios")
            msg = "Cadastro realizado com sucesso"
            await insertAuthUsuario(email, senha, "", "", operacao)
            break
        case "atualizacao":
            currentUsuario = setIDObjects(currentUsuario, idUpdateObject)
            insert = await update(currentUsuario, "usuarios")
            msg = "Alteração realizada com sucesso"
            let object = JSON.parse(sessionStorage.getItem("update"))
            await insertAuthUsuario(email, senha, object.email,object.senha, operacao)
            break
    }
    if (insert == "sucesso") {
        alert(msg) //Colocar um modal aqui depois
        backToMainPage()
    }

}


async function checkTheCurrentActivity() {
    let currentObject
    let currentAtivity = sessionStorage.getItem("update")
    await getListInstEmpresas()
    setOptionsInASelect(arrayInstEmpresas, "selectInstEmpr", "nome", "nome")
    if (currentAtivity != null && currentAtivity != undefined) {
        currentObject = JSON.parse(currentAtivity)
        idUpdateObject = currentObject.id
        fillUsuario(currentObject)
        next.addEventListener("click", () => {
            onClickInsert("atualizacao")
        })
    } else {
        next.addEventListener("click", () => {
            onClickInsert("cadastro")
        })
    }
    back.addEventListener("click", backToMainPage)
}

const fillUsuario = (obj) => {
    let inputNomeEl = document.getElementsByName("nome")[0]
    let inputEmail = document.getElementsByName("email")[0]
    let inputFuncao = document.getElementById("funcoes")
    let inputInstituicaoEmpresa = document.getElementById("selectInstEmpr")
    let inputSenha = document.getElementsByName("senha")[0]

    inputNomeEl.value = obj.nome
    inputEmail.value = obj.email
    setDefaultValueSelect(inputFuncao, obj.funcao)
    setDefaultValueSelect(inputInstituicaoEmpresa, obj.instEmpr)
    inputSenha.value = obj.senha
}


const onClickInsert = async (operacao) => {
    let continueFunction = await checkIfUsuarioWithThisEmailAlreadyExists()
    if (operacao == "cadastro") {
        if (continueFunction) {
            alert("Esse email já está cadastrado no sistema do DockTeck")
            return
        }
    }

    let currentName = getInputValueByName("nome")
    let currentEmail = getInputValueByName("email")
    let currentFuncao = getSelectMarked("funcoes")
    let currentInstituicaoEmpresa = getSelectMarked("selectInstEmpr")
    let currentSenha = getInputValueByName("senha")

    if (!(isInputNull(currentName)) && !(isInputNull(currentEmail)) && !(isInputNull(currentFuncao)) && !(isInputNull(currentInstituicaoEmpresa)) && !(isInputNull(currentSenha))) {
        if (currentSenha.length < 6) {
            alert("Insira uma senha com mais de 6 caracteres")
            return
        }

        await insertUsuario(currentName, currentEmail, currentFuncao, currentInstituicaoEmpresa, currentSenha, operacao)
    } else alert("Um ou mais campos estão vazios")

}

async function checkIfUsuarioWithThisEmailAlreadyExists() {
    let currentEmail = getInputValueByName("email")
    let usuariosAnswer = await filterByOneKey("usuarios", "email", [currentEmail])
    if (usuariosAnswer.length > 0) return true
    else return false
}

checkTheCurrentActivity()


