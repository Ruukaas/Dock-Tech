import { modulo } from "../assets/code/classes/trilha.js"
import { createDivWithClasses, createImage, createInputWithID, createLIWithClasses, getInputValueByName } from "../assets/code/DOM/DOM.js"
import { createModalConfirmDelete, createModalLesson } from "../assets/code/DOM/modal.js"


let currentModulesArray = []
let currentModuleTitleSelected
let isModuleSelected = false

//Div que abriga os itens no HTML
const addModuleEl = document.getElementById("add-module")
const addLessonEl = document.getElementById("add-lesson")
let isInputModuleCurrentOnScreen = false


const divModuleEl = document.getElementById("modules-wrapper")
const moduleListWrapperEl = document.getElementById("module-list-wrapper")
const olModuleListWrapperEl = document.getElementById("ol-module-list-wrapper")


const insertInputModuleDiv = (element, event) => {
    removeCurrentSelectedModule()
    checkIfExistsModules()
    let divEl = createDivWithClasses("input-module-wrapper")
    let inputTitleModule = createInputWithID("inputModule", "text", "inputModule")

    let divButtons = createDivWithClasses("input-module-buttons")

    let okEl = createImage("../assets/global-images/ok.png", "botão com o símbolo de certo", "input-title-button")
    let cancelEl = createImage("../assets/global-images/x.png", "botão com o símbolo de X", "input-title-button")

    okEl.addEventListener("click", () => {
        console.log("ok")
        let currentTitleModule = getInputValueByName("inputModule")
        insertModule(currentTitleModule)
        deleteCurrentInput()
        showModules()
    })

    cancelEl.addEventListener("click", deleteCurrentInput)

    divEl.appendChild(inputTitleModule)
    divButtons.appendChild(okEl)
    divButtons.appendChild(cancelEl)
    divEl.appendChild(divButtons)
    moduleListWrapperEl.appendChild(divEl)

}

const insertLesson = () => {
    if(isModuleSelected) {
        createModalConfirmDelete("blz", "hi","oioi")
    }
}

const deleteCurrentInput = () => {
    document.getElementById("inputModule").parentNode.remove()

    isInputModuleCurrentOnScreen = false
}

const insertModule = (title) => {
    isModuleSelected = false
    currentModuleTitleSelected = ""
    let currentModule = new modulo(title)
    currentModulesArray.push(currentModule)
    // isInputModuleCurrentOnScreen = false
}

const removeCurrentSelectedModule = () => {
    try {
        currentModuleTitleSelected.classList.remove("selected")
        isModuleSelected = false
    } catch (error) { }
}

const changeCurrentSelectedModule = (event) => {
    isModuleSelected = true
    let titleEl = event.target
    removeCurrentSelectedModule()
    titleEl.classList.add("selected")
    currentModuleTitleSelected = titleEl
    checkIfExistsModules()
}


const showModules = () => {
    olModuleListWrapperEl.innerHTML = ""
    console.log(currentModulesArray)
    currentModulesArray.forEach(valor => {
        let currentModule = createDivWithClasses("module")
        let currentTitle = createLIWithClasses(valor.title, "title-module")

        let buttonDivEl = createDivWithClasses("buttons-div")
        let editButtonEl = createImage("../assets/global-images/edit.png", "Ícone de lápis de escrever", "action-button", "edit-button")
        let deleteButtonEl = createImage("../assets/global-images/remove.png", "Ícone de lata de lixo", "action-button", "delete-button")


        currentTitle.addEventListener("click", changeCurrentSelectedModule)

        buttonDivEl.appendChild(editButtonEl)
        buttonDivEl.appendChild(deleteButtonEl)

        currentModule.appendChild(currentTitle)
        currentModule.appendChild(buttonDivEl)

        olModuleListWrapperEl.appendChild(currentModule)
    })
    checkIfExistsModules()
}



const checkIfExistsModules = () => {
    if (currentModulesArray.length > 0 && isModuleSelected) {
        addLessonEl.classList.remove("disabled")
    } else {
        addLessonEl.classList.add("disabled")
    }
}


addModuleEl.addEventListener("click", () => {
    if (!isInputModuleCurrentOnScreen) {
        insertInputModuleDiv()
        isInputModuleCurrentOnScreen = true
    }
})

addLessonEl.addEventListener("click", insertLesson)

//TO-DO : Colocar identificador na posição do array de modulos do modulo atual
const createModule = title => {
    let module = new modulo(title)
    // currentTrilha.setModules(module)
    return module.title
}





