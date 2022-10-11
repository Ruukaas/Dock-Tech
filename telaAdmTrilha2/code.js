document.getElementsByClassName("fa-solid fa-circle-arrow-right fa-3x")[0].addEventListener("click", () => {
    currentTrilha = createTrilha();
})

let currentTrilha

const selectMarkedCheckbox = () => {
    let markedCheckbox = []
    let checkbox = Array.prototype.slice.call(document.getElementsByClassName("itemTrilha mousePointer"))
    checkbox.forEach(element => {
        if(element.checked) {
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
    constructor(lessonTitle,videoType,link) {
        this.lessonTitle = lessonTitle
        this.videoType = videoType
        this.link =  link
    }
}

