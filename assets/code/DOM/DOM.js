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