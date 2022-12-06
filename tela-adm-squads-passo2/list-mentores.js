import { createCheckBox, createDivWithClasses, createDivWithID, createImage, createParagraph, createTitle } from "../assets/code/DOM/DOM.js"

let containerEl //elemento previamente existente na página html onde irá rodar o código aonde serão inseridos os elementos dinamicamente

export const setContainerEl = id => {
    containerEl = document.getElementById(id)
}

//Primeiro argumento : Arquivo com os elementos que estarão na lista - Array
//Segundo argumento: Título da Lista - String
//Terceiro argumento - Classe(Apenas uma) que será adicionada no elemento do título da lista - String
//Quarto argumento - Classe que sera adicionada ao checkbox das listagem de alunos
//Quinto argumento - Classe para o botao next da esquerda
//Sexto argumento = Classe para o botao next da direita
//Setimo argumento - ID do elemento que será criado dinamicamente para que os itens da lista sejam acrescentados nele - String
//Oitavo argumento em diante - Classe ou classes que serão adicionadas em CADA item da lista
//Olhar exemplo de uso no code.js da tela-adm-trilha
export const dynamicList = (file, title, titleClasse, checkboxClasse,nextLeft,nextRight,idContainerList, ...itemListClasses) => {
    let titleEl = createTitle(title,titleClasse)
    let listContainerEl = createDivWithID(idContainerList)

    let containerTitle = createDivWithClasses("container-x")
    let containerP = createDivWithClasses("container-x")
    let containerNext = createDivWithClasses("container-x")

    let exitButton = createImage("../assets/global-images/icons8-xbox-x-50.png","Botao para sair","exit-button")

    let pElement1 = createParagraph("Selecione os mentores responsáveis pelo Squad")
    let pElement2 = createParagraph("Passo 2 de 3")

    let nextButtonEl1 = createImage("../assets/global-images/next-left-2.png","Botao com o simbolo de seta apontada para esquerda",nextLeft)
    let nextButtonEl2 = createImage("../assets/global-images/next.png","Botao com o simbolo de seta apontada para direita",nextRight)


    file.forEach(valor => {
        let itemListEl = createDivWithClasses(...itemListClasses)
        itemListEl.setAttribute("id",valor.id)
        let titleItemListEl = createParagraph(valor.nome)
        let instEmprItemListEl = createParagraph(valor.instEmpr)

        let itemCollumnEl = createDivWithClasses("itemCollumn")

        let checkboxContainer = createDivWithClasses("checkbox-container")
        let checkboxEl = createCheckBox(checkboxClasse)

        checkboxContainer.appendChild(checkboxEl)

        itemCollumnEl.appendChild(titleItemListEl)
        itemCollumnEl.appendChild(instEmprItemListEl)

        itemListEl.appendChild(itemCollumnEl)
        itemListEl.appendChild(checkboxContainer)

        listContainerEl.appendChild(itemListEl)
    })

    containerTitle.appendChild(titleEl)
    containerTitle.appendChild(exitButton)

    containerP.appendChild(pElement1)
    containerP.appendChild(pElement2)

    containerNext.appendChild(nextButtonEl1)
    containerNext.appendChild(nextButtonEl2)

    containerEl.appendChild(containerTitle)
    containerEl.appendChild(containerP)
    containerEl.appendChild(listContainerEl)
    containerEl.appendChild(containerNext)
}
