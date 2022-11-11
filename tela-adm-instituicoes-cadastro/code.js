import { instEmpr } from "../assets/code/classes/instEmpr.js"
import { add, update } from "../assets/code/db/CRUD.js"
import { setIDObjects } from "../assets/code/db/setIDObjects.js"

const back = document.getElementById("back")
const next = document.getElementById("ok")

let idUpdateObject

//Colocar essa função no DOM depois?
const getSelectMarked = (idSelect) => {
    let selectEl = document.getElementById(idSelect)
    let valueSelected = selectEl.options[selectEl.selectedIndex].value
    return valueSelected
}

//Colocar essa função no DOM depois?
const getInputValueByName = (nameInput) => {
    let inputEl = document.getElementsByName(nameInput)[0]
    return inputEl.value
}

//Colocar essa função no DOM depois?
const isInputNull = valor => {
    if (valor === "") return true
    else return false
}

async function cadastroInstEmpr(nome, responsavel, contato, instituicaoEmpresa) {
    if (!(isInputNull(nome)) && !(isInputNull(responsavel)) && !(isInputNull(contato)) && !(isInputNull(instituicaoEmpresa))) { //Se nenhum dos valores passados forem nulos
        let currentInstEmpr = new instEmpr(nome, responsavel, contato, instituicaoEmpresa)
        let insert = await add(currentInstEmpr, "inst-empr")
        if (insert == "sucesso") {
            alert("Cadastro realizado com sucesso") //Colocar um modal aqui depois
            backToMainPage()
        }
    } else
        alert("Um ou mais valores estão nulos") //Colocar um modal aqui depois
}

async function updateInstEmpr(nome, responsavel, contato, instituicaoEmpresa) {
    if (!(isInputNull(nome)) && !(isInputNull(responsavel)) && !(isInputNull(contato)) && !(isInputNull(instituicaoEmpresa))) { //Se nenhum dos valores passados forem nulos
        let currentInstEmpr = new instEmpr(nome, responsavel, contato, instituicaoEmpresa)
        currentInstEmpr = setIDObjects(currentInstEmpr, idUpdateObject)
        let insert = await update(currentInstEmpr, "inst-empr")
        console.log(insert)
        if (insert == "sucesso") {
            sessionStorage.clear()
            alert("Alteração realizada com sucesso") //Colocar um modal aqui depois
            backToMainPage()
        }
    } else
        alert("Um ou mais valores estão nulos") //Colocar um modal aqui depois
}


//Olha se vai fazer um cadastro ou uma alteração
const checkTheCurrentAtivity = () => {
    let currentObject
    let currentAtivity = sessionStorage.getItem("update")
    
    if (currentAtivity != null && currentAtivity != undefined) {
        currentObject = JSON.parse(currentAtivity)
        fillInstEmpr(currentObject)
        idUpdateObject = currentObject.id
        next.addEventListener("click",onClickUpdate)
    } else {
        next.addEventListener("click", onClickCadastro)
    }
    back.addEventListener("click", backToMainPage) 
}

const fillInstEmpr = (obj) => {
    let inputNomeEl = document.getElementsByName("nome")[0]
    let inputResponsavelEl = document.getElementsByName("responsavel")[0]
    let inputContatoEl = document.getElementsByName("contato")[0]
    let selectInstituicaoEmpresa = document.getElementById("funcoes")

    inputNomeEl.value = obj.nome
    inputResponsavelEl.value = obj.responsavel
    inputContatoEl.value = obj.contato

    let indexSelected = selectInstituicaoEmpresa.selectedIndex

    if (selectInstituicaoEmpresa.options[selectInstituicaoEmpresa.selectedIndex].value !== obj.instEmpr) {
        if (indexSelected == 0) selectInstituicaoEmpresa.selectedIndex = 1
        else if (indexSelected == 1) selectInstituicaoEmpresa.selectedIndex = 0
    }
}

const onClickCadastro = () => {
    let currentName = getInputValueByName("nome")
    let currentResponsavel = getInputValueByName("responsavel")
    let currentContato = getInputValueByName("contato")
    let currentInstituicaoEmpresa = getSelectMarked("funcoes")
    cadastroInstEmpr(currentName, currentResponsavel, currentContato, currentInstituicaoEmpresa)
}

const onClickUpdate = () => {
    let currentName = getInputValueByName("nome")
    let currentResponsavel = getInputValueByName("responsavel")
    let currentContato = getInputValueByName("contato")
    let currentInstituicaoEmpresa = getSelectMarked("funcoes")
    updateInstEmpr(currentName, currentResponsavel, currentContato, currentInstituicaoEmpresa)
}

const backToMainPage = () => {
    window.location.href = "../tela-adm-instituicoes/tela-adm-instituicoes.html"
}

checkTheCurrentAtivity()