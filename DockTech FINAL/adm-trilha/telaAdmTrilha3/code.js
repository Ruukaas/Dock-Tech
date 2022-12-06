import { lesson, modulo, trilha } from "../assets/code/classes/trilha.js"
import { add } from "../assets/code/db/CRUD.js"
import { createDivWithClasses, createImage, createInputWithID, createLIWithClasses, getInputValueByName } from "../assets/code/DOM/DOM.js"
import { closeModal, createModalConfirmDelete, createModalLesson, openModal } from "../assets/code/DOM/modal.js"


let currentModulesArray = []
let currentModuleTitleSelected
let isModuleSelected = false
let isInputModuleCurrentOnScreen = false


createModalLesson()

const addModuleEl = document.getElementById("add-module")
const addLessonEl = document.getElementById("add-lesson")
const modalEl = document.getElementById("myModal");
const fadeEl = document.getElementById("fade");
const closeModalEl = document.getElementById("closeModal")
const confirmModalEl = document.getElementById("confirmModal")
const nextEl = document.getElementById("nextButton")
const backEl = document.getElementById("backButton")

const divModuleEl = document.getElementById("modules-wrapper")
const moduleListWrapperEl = document.getElementById("module-list-wrapper")
const olModuleListWrapperEl = document.getElementById("ol-module-list-wrapper")
const olLessonListWrapperEl = document.getElementById("ol-lessons-list-wrapper")


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
    console.log("teste")
    if(isModuleSelected) {
       openModal(modalEl,fadeEl)
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
    let titleEl = event.target
    removeCurrentSelectedModule()
    isModuleSelected = true
    titleEl.classList.add("selected")
    currentModuleTitleSelected = titleEl
    checkIfExistsModules()
}


const showModules = () => {
    olModuleListWrapperEl.innerHTML = ""
    console.log(currentModulesArray)
    currentModulesArray.forEach((valor,indice) => {
        let currentModule = createDivWithClasses("module")
        currentModule.setAttribute("id",indice)
        let currentTitle = createLIWithClasses(valor.title, "title-module")

        currentTitle.addEventListener("click", (event) => {
            changeCurrentSelectedModule(event)
            showLessons(currentModulesArray[indice])
        })


        currentModule.appendChild(currentTitle)

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
        olLessonListWrapperEl.innerHTML = ""
        insertInputModuleDiv()
        isInputModuleCurrentOnScreen = true
    }
})

const showLessons = (moduloObj) => {
    console.log(moduloObj)
    olLessonListWrapperEl.innerHTML = ""
    moduloObj.lessons.forEach(valor => {
        console.log(valor.lessonTitle)
        let currentLesson = createDivWithClasses("lesson")

        let currentTitle = createLIWithClasses(valor.lessonTitle, "title-lesson")

        currentLesson.appendChild(currentTitle)

        olLessonListWrapperEl.appendChild(currentLesson)
    })
}

const confirmActionModal = () => {
    let currentTitleVideo = getInputValueByName("titleVideo")
    let currentLinkVideo = getInputValueByName("linkVideo")

    let currentLesson = new lesson(currentTitleVideo,"external",currentLinkVideo)
    console.log(currentLesson)

    let currentModulePositionInArray = currentModuleTitleSelected.parentNode.getAttribute("id")
    console.log(currentModulePositionInArray)

    currentModulesArray[currentModulePositionInArray].setLessons(currentLesson)
    console.log(currentModulesArray[currentModulePositionInArray])
    showLessons(currentModulesArray[currentModulePositionInArray])

    closeModal(modalEl,fadeEl)

    console.log(currentModulesArray)
    clearInputsModal()
}

const backToMainPage = () => {
    window.location.href = "../tela-adm-trilha/telaAdmTrilha.html"
}

const insertTrilha = async () => {
    let currentResidenceStageArrayAndTitleArray = JSON.parse(sessionStorage.getItem("currentResidenceStageArrayAndTitleArray"))
    console.log(currentResidenceStageArrayAndTitleArray)

    let currentTrilha = new trilha(currentResidenceStageArrayAndTitleArray[1],currentResidenceStageArrayAndTitleArray[0])

    currentModulesArray.forEach(valor => {
        currentTrilha.setModules(valor)
    })

    let insert = await add(currentTrilha,"trilhas")

    if(insert == "sucesso") {
        alert("Cadastro realizado com sucesso")
        backToMainPage()
    }
}

const goToTelaAdmTrilha2 = () => {
    window.location.href = "../telaAdmTrilha2/telaAdmTrilha2.html"
}

const clearInputsModal = () => {
    document.getElementById("linkVideo").value = ""
    document.getElementById("titleVideo").value = ""
}

confirmModalEl.addEventListener("click", confirmActionModal)
addLessonEl.addEventListener("click", insertLesson)

backEl.addEventListener("click",goToTelaAdmTrilha2)
nextEl.addEventListener("click", async() => {
    if(currentModulesArray.length > 0) {
        await insertTrilha()
    }
})







