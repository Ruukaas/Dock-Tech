
import { getInputValueByName, selectedCheckBox } from "../assets/code/DOM/DOM.js"

const goToTelaAdmTrilha3 = () => {
    window.location.href = "../telaAdmTrilha3/telaAdmTrilha3.html"
}


document.getElementsByClassName("fa-solid fa-circle-arrow-right fa-3x")[0].addEventListener("click", () => {
    setResidenceStageArrayAndTitle("listaFases")
    goToTelaAdmTrilha3()
})


const selectMarkedCheckbox = () => {
    let markedCheckbox = []
    let checkboxes = []
    let itemListaArray = Array.prototype.slice.call(document.getElementsByClassName("itemLista"))
    itemListaArray.forEach(valor => {
        checkboxes.push(valor.childNodes[1])
    })

    checkboxes.forEach((element,indice) => {
        if (element.checked) {
            markedCheckbox.push(itemListaArray[indice].childNodes[3].innerText)
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

const setResidenceStageArrayAndTitle = (idListResidenceStage) => {
    let currentResidenceStageArray = selectMarkedCheckbox()
    let currentTitle = getInputValueByName("textInput")

    let currentResidenceStageArrayAndTitleArray = [currentResidenceStageArray,currentTitle]
    
    sessionStorage.setItem("currentResidenceStageArrayAndTitleArray",JSON.stringify(currentResidenceStageArrayAndTitleArray))
}


