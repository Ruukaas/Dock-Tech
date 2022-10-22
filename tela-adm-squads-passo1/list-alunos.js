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

const createCheckBox = (...classes) => {
    let checkBoxEl = document.createElement("input")
    checkBoxEl.setAttribute("type", "checkbox");
    checkBoxEl.classList.add(...classes)
    return checkBoxEl
}

//Primeiro argumento : Arquivo com os elementos que estarão na lista - Array
//Segundo argumento: Título da Lista - String
//Terceiro argumento - Classe(Apenas uma) que será adicionada no elemento do título da lista - String
//Quarto argumento - Classe que sera adicionada ao checkbox das listagem de alunos
//Quinto argumento - ID do elemento que será criado dinamicamente para que os itens da lista sejam acrescentados nele - String
//Sexto argumento em diante - Classe ou classes que serão adicionadas em CADA item da lista
//Olhar exemplo de uso no code.js da tela-adm-trilha
export const dynamicList = (file, title, titleClasse, checkboxClasse,nextButtonStyle,idContainerList, ...itemListClasses) => {
    let titleEl = createTitle(title,titleClasse)
    let listContainerEl = createDivWithID(idContainerList)

    let containerTitle = createDivWithClasses("container-x")
    let containerP = createDivWithClasses("container-x")

    let exitButton = createImage("../assets/global-images/icons8-xbox-x-50.png","Botao para sair","exit-button")

    let pElement1 = createParagraph("Selecione os alunos que farao parte da residencia")
    let pElement2 = createParagraph("Passo 1 de 3")

    let nextButtonEl = createImage("../assets/global-images/next.png","Botao com o simbolo de seta apontada para direita",nextButtonStyle)

    

    file.forEach(valor => {
        let itemListEl = createDivWithClasses(...itemListClasses)
        let titleItemListEl = createParagraph(valor.title)
        
        let checkboxContainer = createDivWithClasses("checkbox-container")
        let checkboxEl = createCheckBox(checkboxClasse)

        checkboxContainer.appendChild(checkboxEl)

        itemListEl.appendChild(titleItemListEl)
        itemListEl.appendChild(checkboxContainer)

        listContainerEl.appendChild(itemListEl)
    })

    containerTitle.appendChild(titleEl)
    containerTitle.appendChild(exitButton)

    containerP.appendChild(pElement1)
    containerP.appendChild(pElement2)

    containerEl.appendChild(containerTitle)
    containerEl.appendChild(containerP)
    containerEl.appendChild(listContainerEl)
    containerEl.appendChild(nextButtonEl)
}
