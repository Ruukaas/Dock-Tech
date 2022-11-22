export const createTitle = (name,...classes) => {
    let h1El = document.createElement("h1")
    h1El.classList.add(...classes)
    h1El.textContent = name
    return h1El 
}

export const createDivWithID = id => {
    let divEl = document.createElement("div")
    divEl.setAttribute("id",id)
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
    for(let i = 0;i < selectElement.options.length; i++) {
        if(selectElement.options[i].value == selectedValue) {
            selectElement.selectedIndex = i
            break
        }
    }
    return selectElement
}

//sem parametro no listener
export const addEventToElementOnClick = (element, event) => {
    element.addEventListener("click",event)
}

export const addEventToHTMLCollectionOnClick = (HTMLCollection, event) => {
    let buttonsArray = Array.prototype.slice.call(HTMLCollection)
    buttonsArray.forEach(elemento => {
      elemento.addEventListener("click", event)
    })
}


