import {changeCurrentPositionOrder,saveCurrentStats, changeCurrentTypeVideo, currentPositionOrder} from "./control.js"
import {deletePreviousVideo, reBuildIframe, changeVideoTitle} from "./video-player.js"

let countPositionOrder //Contador utilizado para inserir a posição do elemento no DOM

export const dynamicTrilha = (trilhaJSON) => {
    countPositionOrder = 0
    const trilhaEL = document.getElementById("trilha")
    let summaryEL = document.createElement("ol")
    summaryEL.classList.add("summary")

    trilhaJSON.modules.forEach((valor) => {
        let module = createModule(valor.title)
        let subModule = createLessonsModule();
        let contentModuleArray = valor.lessons

        contentModuleArray.forEach((value) => {
            let lesson = createLesson(value)
            let checkbox = createCheckbox()

            lesson.appendChild(checkbox)
            countPositionOrder++
            subModule.appendChild(lesson)
        })

        module.appendChild(subModule)
        summaryEL.appendChild(module)
    })
    trilhaEL.appendChild(summaryEL)
}

export const createModule = (text) => {
    let li = document.createElement("li")
    li.classList.add("module")
    li.textContent = text
    return li
}

//Lesson para não colocar class e confundir com o do HTML
export const createLessonsModule = () => {
    let ol = document.createElement("ol")
    ol.classList.add("sub-module")
    return ol;
}

export const createLesson = (lesson) => {
    let div = document.createElement("div")
    div.classList.add("lesson")
    let li = document.createElement("li")
    li.textContent = lesson.lessonTitle
    li.setAttribute("id", countPositionOrder) 
    li.addEventListener("click", (eventTarget) => {
        changeCurrentPositionOrder(Number(eventTarget.target.id))
        saveCurrentStats()
        deletePreviousVideo()
        changeCurrentTypeVideo(lesson.videoType)
        reBuildIframe(lesson.link, lesson.videoType)
        changeVideoTitle(lesson.lessonTitle)
    })
    div.appendChild(li)
    return div;
}

export const createCheckbox = () => {
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("name", countPositionOrder)
    checkbox.setAttribute("disabled","disabled")
    
    return checkbox
}

export const changeCheckBox = () => {
    document.getElementsByName(currentPositionOrder)[0].setAttribute("checked","checked")
}