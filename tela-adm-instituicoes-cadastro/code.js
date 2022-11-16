import { instEmpr } from "../assets/code/classes/instEmpr.js"
import { add, update } from "../assets/code/db/CRUD.js"
import { setIDObjects } from "../assets/code/db/setIDObjects.js"
import { getSelectMarked, getInputValueByName, isInputNull, setDefaultValueSelect } from "../assets/code/DOM/DOM.js"

const back = document.getElementById("back")
const next = document.getElementById("ok")

let idUpdateObject

async function insertInstEmpr(nome, responsavel, contato, instituicaoEmpresa, operacao) {
    if (!(isInputNull(nome)) && !(isInputNull(responsavel)) && !(isInputNull(contato)) && !(isInputNull(instituicaoEmpresa))) { //Se nenhum dos valores passados forem nulos
        let insert
        let msg
        let currentInstEmpr = new instEmpr(nome, responsavel, contato, instituicaoEmpresa)
        switch (operacao) {
            case "cadastro":
                insert = await add(currentInstEmpr, "inst-empr")
                msg = "Cadastro realizado com sucesso"
                break
            case "atualizacao":
                currentInstEmpr = setIDObjects(currentInstEmpr, idUpdateObject)
                insert = await update(currentInstEmpr, "inst-empr")
                msg = "Alteração realizada com sucesso"
                break
        }
        if (insert == "sucesso") {
            alert(msg) //Colocar um modal aqui depois
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

const fillInstEmpr = (obj) => {
    let inputNomeEl = document.getElementsByName("nome")[0]
    let inputResponsavelEl = document.getElementsByName("responsavel")[0]
    let inputContatoEl = document.getElementsByName("email")[0]
    let inputSelectInstituicaoEmpresa = document.getElementById("funcoes")

    inputNomeEl.value = obj.nome
    inputResponsavelEl.value = obj.responsavel
    inputContatoEl.value = obj.contato

    setDefaultValueSelect(inputSelectInstituicaoEmpresa, obj.instEmpr)
}

const onClickInsert = (operacao) => {
    let currentName = getInputValueByName("nome")
    let currentResponsavel = getInputValueByName("responsavel")
    let currentContato = getInputValueByName("email")
    let currentInstituicaoEmpresa = getSelectMarked("funcoes")
    insertInstEmpr(currentName, currentResponsavel, currentContato, currentInstituicaoEmpresa,operacao)
}

const backToMainPage = () => {
    window.location.href = "../tela-adm-instituicoes/tela-adm-instituicoes.html"
}

checkTheCurrentAtivity()