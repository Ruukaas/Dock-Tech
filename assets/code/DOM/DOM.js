export const createTitle = (name, ...classes) => {
    let h1El = document.createElement("h1")
    h1El.classList.add(...classes)
    h1El.textContent = name
    return h1El
}
export const createSubTitle = (name, ...classes) => {
    let h2El = document.createElement("h2")
    h2El.classList.add(...classes)
    h2El.textContent = name
    return h2El
}

export const createDivWithID = id => {
    let divEl = document.createElement("div")
    divEl.setAttribute("id", id)
    return divEl
}

export const createDivWithClasses = (...classes) => {
    let divEl = document.createElement("div")
    divEl.classList.add(...classes)
    return divEl
}

export const createParagraph = (name) => {
    let pEl = document.createElement("p")
    pEl.textContent = name
    return pEl
}

export const createImage = (src, alt, ...classes) => {
    let imgEl = document.createElement("img")
    imgEl.setAttribute("src", src)
    imgEl.setAttribute("alt", alt)
    imgEl.classList.add(...classes)
    return imgEl
}

export const createOption = (value, textContent) => {
    let optionEl = document.createElement("option")
    optionEl.setAttribute("value", value)
    optionEl.textContent = textContent
    return optionEl
}

export const createCheckBox = (...classes) => {
    let checkBoxEl = document.createElement("input")
    checkBoxEl.setAttribute("type", "checkbox");
    checkBoxEl.classList.add(...classes)
    return checkBoxEl
}

export const createSelect = (...classes) => {
    let selectEl = document.createElement("select")
    selectEl.classList.add(...classes)
    return selectEl
}

export const createInputTypeNumber = (id, nome) => {
    let inputEl = document.createElement("input")
    inputEl.setAttribute("type", "number")
    inputEl.setAttribute("id", id)
    inputEl.setAttribute("name", nome)
    return inputEl
}

export const createInputWithID = (id, type, name) => {
    let inputEl = document.createElement("input")
    inputEl.setAttribute("type", type)
    inputEl.setAttribute("id", id)
    inputEl.setAttribute("name", name)
    return inputEl
}

export const createLIWithClasses = (value, ...classes) => {
    let liEl = document.createElement("li")
    liEl.innerText = value
    liEl.classList.add(...classes)
    return liEl
}

export const getSelectMarked = (idSelect) => {
    let selectEl = document.getElementById(idSelect)
    let valueSelected = selectEl.options[selectEl.selectedIndex].value
    return valueSelected
}

export const getInputValueByName = (nameInput) => {
    let inputEl = document.getElementsByName(nameInput)[0]
    return inputEl.value
}

export const getIDElement = element => element.getAttribute("id")

export const isInputNull = valor => {
    if (valor === "") return true
    else return false
}

export const setDefaultValueSelect = (selectElement, selectedValue) => {
    let indexSelected = selectElement.selectedIndex
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value == selectedValue) {
            selectElement.selectedIndex = i
            break
        }
    }
    return selectElement
}

//O attribute é a propridade dos objetos do array que vai ser colocada no valor
export const setOptionsInASelect = (arrayItens, idSelect, valueAttribute, textContentAttribute) => {
    let currentSelectEl = document.getElementById(idSelect)
    arrayItens.forEach(valor => {
        let currentOption = createOption(valor[valueAttribute], valor[textContentAttribute])
        currentSelectEl.appendChild(currentOption)
    })
}

//sem parametro no listener
export const addEventToElementOnClick = (element, event) => {
    element.addEventListener("click", event)
}

export const addEventToHTMLCollectionOnClick = (HTMLCollection, event) => {
    let buttonsArray = Array.prototype.slice.call(HTMLCollection)
    buttonsArray.forEach(elemento => {
        elemento.addEventListener("click", event)
    })
}

//retorna um array com a posição na lista dos selecionados
export const selectedCheckBox = (containerList) => {
    let containerEl = document.getElementById(containerList)
    let nodeChild = containerEl.childNodes
    let arrayNodeChild = Array.prototype.slice.call(nodeChild)
    let selectedPositionCheckbox = []
    arrayNodeChild.forEach((valor, indice) => {
        console.log(valor.childNodes[1].childNodes[0].checked)
        if (valor.childNodes[1].childNodes[0].checked) {
            selectedPositionCheckbox.push(indice)
        }
    })

    return selectedPositionCheckbox
}

export const checkCheckboxes = (arrayIDs) => {
    arrayIDs.forEach((valor) => {
        let currentItem = document.getElementById(valor)
        currentItem.childNodes[1].childNodes[0].checked = true
    })
}

