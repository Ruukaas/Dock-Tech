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


    file.forEach(valor => {
        console.log(valor)
        let itemListEl = createDivWithClasses(...itemListClasses)
        let userDivEl = createDivWithClasses("user-div")
        let nomeItemListEl = createParagraph(valor.title)
        let funcaoItemListEl = createParagraph(valor.residenceStageArray)

        nomeItemListEl.setAttribute("class", "nome")
        funcaoItemListEl.setAttribute("class", "funcao")

        itemListEl.setAttribute("id", valor.id)


        userDivEl.appendChild(nomeItemListEl)
        userDivEl.appendChild(funcaoItemListEl)

    


        let buttonDivEl = createDivWithClasses("buttons-div")
        let editButtonEl = createImage("../assets/global-images/edit.png","Ícone de lápis de escrever","action-button","edit-button")
        let deleteButtonEl = createImage("../assets/global-images/remove.png", "Ícone de lata de lixo","action-button","delete-button")
      
        buttonDivEl.appendChild(editButtonEl)
        buttonDivEl.appendChild(deleteButtonEl)

        // itemListEl.appendChild(titleItemListEl)
        itemListEl.appendChild(userDivEl)
        itemListEl.appendChild(buttonDivEl)

        listContainerEl.appendChild(itemListEl)
    })

    containerEl.appendChild(titleEl)
    containerEl.appendChild(listContainerEl)
}

