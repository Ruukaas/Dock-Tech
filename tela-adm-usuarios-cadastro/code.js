import { createOption, getSelectMarked, isInputNull, getInputValueByName } from "../assets/code/DOM/DOM.js"
import { getAll, add, update } from "../assets/code/db/CRUD.js"
import { usuario } from "../assets/code/classes/usuario.js"
import { setIDObjects } from "../assets/code/db/setIDObjects.js"

const back = document.getElementById("back")
const next = document.getElementById("ok")

//TODO aqui e nas outras, quando for um update e não um cadastro trocar o titulo da página para indicar a ação de update

let arrayInstEmpresas
let idUpdateObject
function backEvent() {
    window.location.href = "../tela-adm-usuario-inicial/tela-adm-usuario.html"
}

function setInstituicoesEmpresasAsOptions(arrayItens, idSelect) {
    let selectEl = document.getElementById(idSelect)
    arrayItens.forEach(valor => {
        let currentOption = createOption(valor.nome, valor.nome)
        selectEl.appendChild(currentOption)
    })
}

async function getListInstEmpresas() {
    arrayInstEmpresas = await getAll("inst-empr")
}

async function cadastroUsuario(nome, email, funcao, instituicaoEmpresa, github, senha) {
    if (!(isInputNull(nome)) && !(isInputNull(email)) && !(isInputNull(funcao)) && !(isInputNull(instituicaoEmpresa)) && !(isInputNull(github)) && !(isInputNull(senha))) { //Se nenhum dos valores passados forem nulos
        let currentUsuario = new usuario(nome, email, funcao, instituicaoEmpresa, github, senha) //Se der tempo, colocar referencia ao documento de instEmpr(não vai dar)
        let insert = await add(currentUsuario, "usuarios")
        if (insert == "sucesso") {
            alert("Cadastro realizado com sucesso") //Colocar um modal aqui depois
            backEvent()
        }

    } else alert("Um ou mais campos estão vazios")
}

async function updateUsuario(nome, email, funcao, instituicaoEmpresa, github, senha) {
    if (!(isInputNull(nome)) && !(isInputNull(email)) && !(isInputNull(funcao)) && !(isInputNull(instituicaoEmpresa)) && !(isInputNull(github)) && !(isInputNull(senha))) { //Se nenhum dos valores passados forem nulos {
        let currentUsuario = new usuario(nome, email, funcao, instituicaoEmpresa, github, senha) //Se der tempo, colocar referencia ao documento de instEmpr(não vai dar)
        currentUsuario = setIDObjects(currentUsuario, idUpdateObject)
        let insert = await update(currentUsuario,"usuarios")
        if (insert == "sucesso") {
            sessionStorage.clear()
            alert("Alteração realizada com sucesso") //Colocar um modal aqui depois
            backEvent()
        }
    }  else alert("Um ou mais campos estão vazios")
}


async function checkTheCurrentActivity() {
    let currentObject
    let currentAtivity = sessionStorage.getItem("update")
    await getListInstEmpresas()
    setInstituicoesEmpresasAsOptions(arrayInstEmpresas, "selectInstEmpr")
    if (currentAtivity != null && currentAtivity != undefined) {
        currentObject = JSON.parse(currentAtivity)
        idUpdateObject = currentObject.id
        fillUsuario(currentObject)
        next.addEventListener("click", onClickUpdate)
    } else {
        next.addEventListener("click", onClickCadastro)
    }
    back.addEventListener("click", backEvent)
}

const fillUsuario = (obj) => {
    let inputNomeEl = document.getElementsByName("nome")[0] 
    let inputEmail = document.getElementsByName("email")[0] 
    let inputFuncao = document.getElementById("funcoes") 
    let inputInstituicaoEmpresa = document.getElementById("selectInstEmpr") 
    let inputGithub = document.getElementsByName("github")[0] 
    let inputSenha = document.getElementsByName("senha")[0] 


    inputNomeEl.value = obj.nome
    inputEmail.value = obj.email
    setDefaultValueSelect(inputFuncao,obj.funcao)
    setDefaultValueSelect(inputInstituicaoEmpresa,obj.instEmpr)
    inputGithub.value = obj.github
    inputSenha.value = obj.senha
}

const setDefaultValueSelect = (selectElement, selectedValue) => {
    let indexSelected = selectElement.selectedIndex
    for(let i = 0;i < selectElement.options.length; i++) {
        if(selectElement.options[i].value == selectedValue) {
            selectElement.selectedIndex = i
            break
        }
    }
    return selectElement
}

const onClickCadastro = () => {
    let currentName = getInputValueByName("nome")
    let currentEmail = getInputValueByName("email")
    let currentFuncao = getSelectMarked("funcoes")
    let currentInstituicaoEmpresa = getSelectMarked("selectInstEmpr")
    let currentGithub = getInputValueByName("github")
    let currentSenha = getInputValueByName("senha")
    cadastroUsuario(currentName, currentEmail, currentFuncao, currentInstituicaoEmpresa, currentGithub, currentSenha)
}

const onClickUpdate = () => {
    let currentName = getInputValueByName("nome")
    let currentEmail = getInputValueByName("email")
    let currentFuncao = getSelectMarked("funcoes")
    let currentInstituicaoEmpresa = getSelectMarked("selectInstEmpr")
    let currentGithub = getInputValueByName("github")
    let currentSenha = getInputValueByName("senha")
    updateUsuario(currentName, currentEmail, currentFuncao, currentInstituicaoEmpresa, currentGithub, currentSenha)
}

checkTheCurrentActivity()

