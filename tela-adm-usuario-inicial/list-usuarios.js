let containerEl //elemento previamente existente na página html onde irá rodar o código aonde serão inseridos os elementos dinamicamente

export const setContainerEl = id => {
    containerEl = document.getElementById(id)
}

const createTitle = (name,...classes) => {
    let h1El = document.createElement("h1")
    h1El.classList.add(...classes)
    h1El.textContent = name
    return h1El 
}

const createDivWithID = id => {
    let divEl = document.createElement("div")
    divEl.setAttribute("id",id)
    return divEl
}

const createDivWithClasses = (...classes) => {
    let divEl = document.createElement("div")
    divEl.classList.add(...classes)
    return divEl
}

const createParagraph = (name) => {
    let pEl = document.createElement("p")
    pEl.textContent = name
    return pEl
}

const createImage = (src, alt, ...classes) => {
    let imgEl = document.createElement("img")
    imgEl.setAttribute("src", src)
    imgEl.setAttribute("alt", alt)
    imgEl.classList.add(...classes)
    return imgEl
}

//Primeiro argumento : Arquivo com os elementos que estarão na lista - Array
//Segundo argumento: Título da Lista - String
//Terceiro argumento - Classe(Apenas uma) que será adicionada no elemento do título da lista - String
//Quarto argumento - ID do elemento que será criado dinamicamente para que os itens da lista sejam acrescentados nele - String
//Quinto argumento em diante - Classe ou classes que serão adicionadas em CADA item da lista
//Olhar exemplo de uso no code.js da tela-adm-trilha
export const dynamicList = (file, title, titleClasse, idContainerList, ...itemListClasses) => {
    let titleEl = createTitle(title,titleClasse)
    let listContainerEl = createDivWithID(idContainerList)

    let addButtonEl = createImage("../assets/global-images/add-light.png","Botão com o sinal de mais")
    addButtonEl.setAttribute("id", "addButton")

    file.forEach(valor => {
        let itemListEl = createDivWithClasses(...itemListClasses)
        let titleItemListEl = createParagraph(valor.title)
        let instituicaoItemListEl = createParagraph(valor.instituicao)
        
        let actionsButtonContainer = createDivWithClasses("action-container")
        let editButtonEl = createImage("../assets/global-images/edit.png","Ícone de lápis de escrever","action-button","edit-button")
        let deleteButtonEl = createImage("../assets/global-images/remove.png", "Ícone de lata de lixo","action-button","delete-button")
      
        actionsButtonContainer.appendChild(editButtonEl)
        actionsButtonContainer.appendChild(deleteButtonEl)

        itemListEl.appendChild(titleItemListEl)
        itemListEl.appendChild(instituicaoItemListEl)
        itemListEl.appendChild(actionsButtonContainer)

        listContainerEl.appendChild(itemListEl)
    })

    containerEl.appendChild(titleEl)
    containerEl.appendChild(listContainerEl)
    containerEl.appendChild(addButtonEl)
}
