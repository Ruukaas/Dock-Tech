document.getElementsByClassName("fa-solid fa-circle-arrow-right fa-3x")[0].addEventListener("click", () => {
    currentTrilha = createTrilha()
    nextStep()
})

//Div que abriga os itens no HTML
const getPrincipalWrapper = () => document.getElementById("principal-wrapper")

const removePreviousSteps = () => {
    let principalEl = getPrincipalWrapper()
    principalEl.innerHTML = ""
}

let principalEl = getPrincipalWrapper()
const nextStep = () => {
    removePreviousSteps()
    let titleEl = createPageTitle()
    let stepEl = createStepDescription()
    let centerWrapperEl = createDivWithID("center-wrapper")

    let moduleAndLessonDivEl = createDivWithID("module-and-lesson-wrapper")


    let modulesWrapperEl = createDivWithID("modules-wrapper")
    let moduleTitleEl = createTitleModuleAndLessonWrapper("Módulos")
    let moduleList = createDivWithID("module-list-wrapper")

    let lessonsWrapperEl = createDivWithID("lessons-wrapper")
    let lessonTitleEl = createTitleModuleAndLessonWrapper("Conteúdo")
    let lessonList = createDivWithID("lesson-list-wrapper")

    let buttonsActionsDiv = createDivWithID("buttons-actions")
    let backEl = createImage("../assets/global-images/back.png", "Botão com uma seta para a esquerda", "button-actions")
    backEl.addEventListener("click", () => window.location.href = "./telaAdmTrilha2.html")
    let nextEl = createImage("../assets/global-images/next.png", "Botão com uma seta para a direita", "button-actions")
    nextEl.addEventListener("click", () => window.location.href = "../tela-adm-trilha/telaAdmTrilha.html")

    let addModuleEl = createImageWithID("../assets/global-images/add.png", "botão com o simbolo de mais", "add-module")
    addModuleEl.classList.add("add-button")
    addModuleEl.addEventListener("click", (event) => {
        insertInputModuleDiv(moduleList,event)
    })

    let addLessonsEl = createImageWithID("../assets/global-images/add.png", "botão com o simbolo de mais", "add-lesson")
    addLessonsEl.classList.add("add-button", "disabled")




    buttonsActionsDiv.appendChild(backEl)
    buttonsActionsDiv.appendChild(nextEl)


    modulesWrapperEl.appendChild(moduleTitleEl)
    modulesWrapperEl.appendChild(moduleList)
    modulesWrapperEl.appendChild(addModuleEl)


    lessonsWrapperEl.appendChild(lessonTitleEl)
    lessonsWrapperEl.appendChild(addLessonsEl)
    lessonsWrapperEl.appendChild(lessonList)

    moduleAndLessonDivEl.appendChild(modulesWrapperEl)
    moduleAndLessonDivEl.appendChild(lessonsWrapperEl)

    centerWrapperEl.appendChild(moduleAndLessonDivEl)
    centerWrapperEl.appendChild(buttonsActionsDiv)

    principalEl.appendChild(titleEl)
    principalEl.appendChild(stepEl)
    principalEl.appendChild(centerWrapperEl)
}

const insertInputModuleDiv = (element,event) => {
    let divEl = createDivWithClasses("input-module-wrapper")
    let inputTitleModule = createInput("inputModule", "text", "Module Title")
    
    let divButtons = createDivWithClasses("input-module-buttons")
    let okEl = createImage("../assets/global-images/ok.png", "botão com o símbolo de certo", "input-title-button")
    let cancelEl = createImage("../assets/global-images/x.png", "botão com o símbolo de X", "input-title-button")

    okEl.addEventListener("click", () => {
        let titleModule = createModule(inputTitleModule.value)
        insertModule(titleModule,element)
    })




    divEl.appendChild(inputTitleModule)
    divButtons.appendChild(okEl)
    divButtons.appendChild(cancelEl)
    divEl.appendChild(divButtons)
    element.appendChild(divEl)
}

const insertModule = (title, elementoPai,event) => {
    console.log()
    elementoPai.lastChild.remove()
    let divModule = createDivWithClasses("module")
    divModule.textContent = title
    elementoPai.appendChild(divModule)
}

//TO-DO : Colocar identificador na posição do array de modulos do modulo atual
const createModule = title => {
    let module = new modulo(title)
    currentTrilha.setModules(module)
    return module.title
}


const createInput = (id, type, name) => {
    let inputEl = document.createElement("input")
    inputEl.setAttribute("type", type)
    inputEl.setAttribute("id", id)
    inputEl.setAttribute("name", name)
    return inputEl

}
const createDivWithID = id => {
    let divEl = document.createElement("div")
    divEl.setAttribute("id", id)
    return divEl
}
const createDivWithClasses = (...classes) => {
    let divEl = document.createElement("div")
    divEl.classList.add(classes)
    return divEl
}

const createImageWithID = (src, alt, id) => {
    let imgEl = document.createElement("img")
    imgEl.setAttribute("src", src)
    imgEl.setAttribute("alt", alt)
    imgEl.setAttribute("id", id)
    return imgEl

}

const createImage = (src, alt, ...classes) => {
    let imgEl = document.createElement("img")
    imgEl.setAttribute("src", src)
    imgEl.setAttribute("alt", alt)
    imgEl.classList.add(classes)
    return imgEl
}

const createTitleModuleAndLessonWrapper = title => {
    let h3El = document.createElement("h3")
    h3El.classList.add("title-mlw") //module and lesson wrapper
    h3El.textContent = title
    return h3El
}




const createPageTitle = () => {
    let divEl = document.createElement("div")
    divEl.classList.add("itemTrilha", "fonteCinza")
    let h1El = document.createElement("h1")
    h1El.innerText = "Trilhas"
    divEl.appendChild(h1El)
    return divEl
}

const createStepDescription = () => {
    let divEl = document.createElement("div")
    divEl.classList.add("containerTrilha", "row", "fonteCinza")

    let h2El = document.createElement("h2")
    h2El.classList.add("itemTrilha")
    h2El.innerText = "Insira os módulos e vídeos da trilha"

    let pEl = document.createElement("p")
    pEl.classList.add("itemTrilha")
    pEl.innerText = "Passo 3"

    divEl.appendChild(h2El)
    divEl.appendChild(pEl)

    return divEl
}


//Tela trilha 1
let currentTrilha

const selectMarkedCheckbox = () => {
    let markedCheckbox = []
    let checkbox = Array.prototype.slice.call(document.getElementsByClassName("itemTrilha mousePointer"))
    checkbox.forEach(element => {
        if (element.checked) {
            markedCheckbox.push(element)
        }
    })
    return markedCheckbox
}

const getResidenceStage = (checkBoxArrayEl = selectMarkedCheckbox()) => {
    let residenceStage = []
    checkBoxArrayEl.forEach(element => {
        residenceStage.push(element.parentNode.getElementsByTagName("p")[0].textContent)
    })
    return residenceStage
}

const getTitleTrilha = () => {
    let input = document.getElementById("textInput")
    return input.value
}

const createTrilha = (trilhaTitle = getTitleTrilha(), trilhaStages = getResidenceStage(selectMarkedCheckbox())) =>{
    let currentTrilha = new trilha(trilhaTitle,trilhaStages);
    return currentTrilha;

}

class trilha {
    constructor(title, residenceStageArray) {
        this.title = title
        this.residenceStage = residenceStageArray
    }

    modules = []

    setModules(modulo) {
        this.modules.push(modulo)
    }
}

class modulo {
    constructor(title) {
        this.title = title
    }

    lessons = []
    setLessons(lesson) {
        this.lessons.push(lesson)
    }
}



class lesson {
    constructor(lessonTitle, videoType, link) {
        this.lessonTitle = lessonTitle
        this.videoType = videoType
        this.link = link
    }
}

