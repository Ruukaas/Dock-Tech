import {createDivWithClasses, createDivWithID, createImage, createParagraph, createTitle} from "../assets/code/DOM/DOM.js"

let containerEl //elemento previamente existente na página html onde irá rodar o código aonde serão inseridos os elementos dinamicamente

export const clearContainerEl = () => {
    containerEl.innerHTML = ""
}


export const setContainerEl = id => {
    containerEl = document.getElementById(id)
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
        let titleItemListEl = createParagraph(valor.nome)

        itemListEl.setAttribute("id", valor.id)

        let itemCollumEl = createDivWithClasses("itemColumn")
        let subItemDiv1 = createDivWithClasses("subItem")
        let subItemDiv2 = createDivWithClasses("subItem")
        let subItemDiv3 = createDivWithClasses("subItem")

        let funcaoItemListP = createParagraph("Função:")
        let funcaoItemListEl = createParagraph(valor.funcao)

        let instituicaoItemListP = createParagraph("Instituicao/Empresa: ")
        let instituicaoItemListEl = createParagraph(valor.instEmpr)

        let emailItemListP = createParagraph("Email:")
        let emailItemListEl = createParagraph(valor.email)

        subItemDiv1.appendChild(funcaoItemListP)
        subItemDiv1.appendChild(funcaoItemListEl)

        subItemDiv2.appendChild(instituicaoItemListP)
        subItemDiv2.appendChild(instituicaoItemListEl)

        subItemDiv3.appendChild(emailItemListP)
        subItemDiv3.appendChild(emailItemListEl)

        itemCollumEl.appendChild(subItemDiv1)
        itemCollumEl.appendChild(subItemDiv2)
        itemCollumEl.appendChild(subItemDiv3)

        let actionsButtonContainer = createDivWithClasses("action-container")
        let editButtonEl = createImage("../assets/global-images/edit.png","Ícone de lápis de escrever","action-button","edit-button")
        let deleteButtonEl = createImage("../assets/global-images/remove.png", "Ícone de lata de lixo","action-button","delete-button")
      
        actionsButtonContainer.appendChild(editButtonEl)
        actionsButtonContainer.appendChild(deleteButtonEl)

        itemListEl.appendChild(titleItemListEl)
        itemListEl.appendChild(itemCollumEl)
        itemListEl.appendChild(actionsButtonContainer)

        listContainerEl.appendChild(itemListEl)
    })

    containerEl.appendChild(titleEl)
    containerEl.appendChild(listContainerEl)
    containerEl.appendChild(addButtonEl)
}