import {createTitle, createDivWithID, createDivWithClasses, createParagraph, createImage} from "../assets/code/DOM/DOM.js"


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
export const dynamicList = (file, title, titleClasse, idContainerList, ...itemListClasses) => {
    let titleEl = createTitle(title,titleClasse)
    let listContainerEl = createDivWithID(idContainerList)

    let addButtonEl = createImage("../assets/global-images/add-light.png","Botão com o sinal de mais")
    addButtonEl.setAttribute("id", "addButton")
    file.forEach(valor => {
        let itemListEl = createDivWithClasses(...itemListClasses)
        itemListEl.setAttribute("id",valor.id)

        let itemCollumEl1 = createDivWithClasses("itemColumn")
        let titleItemListEl = createParagraph(valor.nome)
        let descItemListEl = createParagraph(valor.instEmpr)
        let itemCollumEl = createDivWithClasses("itemColumn")
        let subItemDiv1 = createDivWithClasses("subItem")
        let subItemDiv2 = createDivWithClasses("subItem")

        let responsavelItemListP = createParagraph("Responsavel: ")
        let squadItemListEl = createParagraph(valor.responsavel)

        let contatoItemListP = createParagraph("Contato: ")
        let contatoItemListEl = createParagraph(valor.contato)

        // let instituicaoItemListP = createParagraph("Instituicao/Empresa: ")
        // let instituicaoItemListEl = createParagraph(valor.contato)

        itemCollumEl1.appendChild(titleItemListEl)
        itemCollumEl1.appendChild(descItemListEl)

        subItemDiv1.appendChild(responsavelItemListP)
        subItemDiv1.appendChild(squadItemListEl)

        subItemDiv2.appendChild(contatoItemListP)
        subItemDiv2.appendChild(contatoItemListEl)

        
        itemCollumEl.appendChild(subItemDiv1)
        itemCollumEl.appendChild(subItemDiv2)

 
        
        let actionsButtonContainer = createDivWithClasses("action-container")
        let editButtonEl = createImage("../assets/global-images/edit.png","Ícone de lápis de escrever","action-button","edit-button")
        let deleteButtonEl = createImage("../assets/global-images/remove.png", "Ícone de lata de lixo","action-button","delete-button")
      
        actionsButtonContainer.appendChild(editButtonEl)
        actionsButtonContainer.appendChild(deleteButtonEl)

        itemListEl.appendChild(itemCollumEl1)
        itemListEl.appendChild(itemCollumEl)
        itemListEl.appendChild(actionsButtonContainer)

        listContainerEl.appendChild(itemListEl)
    })

    containerEl.appendChild(titleEl)
    containerEl.appendChild(listContainerEl)
    containerEl.appendChild(addButtonEl)
}