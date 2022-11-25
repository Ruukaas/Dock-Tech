import { createTitle, createDivWithID, createDivWithClasses, createParagraph, createImage } from "../assets/code/DOM/DOM.js"

let containerEl //elemento previamente existente na página html onde irá rodar o código aonde serão inseridos os elementos dinamicamente

export const setContainerEl = id => {
    containerEl = document.getElementById(id)
}

export const clearContainerEl = () => {
    containerEl.innerHTML = ""
}

//Primeiro argumento : Arquivo com os elementos que estarão na lista - Array
//Segundo argumento: Título da Lista - String
//Terceiro argumento - Classe(Apenas uma) que será adicionada no elemento do título da lista - String
//Quarto argumento - ID do elemento que será criado dinamicamente para que os itens da lista sejam acrescentados nele - String
//Quinto argumento em diante - Classe ou classes que serão adicionadas em CADA item da lista
//Olhar exemplo de uso no code.js da tela-adm-trilha
export const dynamicList = (file) => {
    let divTitleContainerEl = createDivWithID("title-container")
    let titleEl = createTitle("Squads", "title")

    // let divListContainer = createDivWithID("containerTrilha")

    let divListItem = createDivWithClasses("container-lista")

    file.forEach(valor => {
        let divItemListaEl = createDivWithClasses("lista")
        divItemListaEl.setAttribute("id",valor.id)

        let divContainerInfoEl = createDivWithClasses("user-div-squads")

        let pNameItemEl = createParagraph("Squad " + valor.numeroSquad)
        let pProgramaResidenciaEl = createParagraph(valor.programaResidencia)

        let divButtonsEl = createDivWithClasses("buttons-div")

        let editButtonEl = createImage("../assets/global-images/edit.png", "Ícone de lápis de escrever", "action-button", "edit-button")
        let deleteButtonEl = createImage("../assets/global-images/remove.png", "Ícone de lata de lixo", "action-button", "delete-button")


        divContainerInfoEl.appendChild(pNameItemEl)
        divContainerInfoEl.appendChild(pProgramaResidenciaEl)

        divButtonsEl.appendChild(editButtonEl)
        divButtonsEl.appendChild(deleteButtonEl)

        divItemListaEl.appendChild(divContainerInfoEl)
        divItemListaEl.appendChild(divButtonsEl)

        divListItem.appendChild(divItemListaEl)
    })


    divTitleContainerEl.appendChild(titleEl)

    // divListContainer.appendChild(divListItem)

    containerEl.appendChild(divTitleContainerEl)
    containerEl.appendChild(divListItem)
}
