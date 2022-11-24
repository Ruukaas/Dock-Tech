import { createCheckBox, createDivWithClasses, createDivWithID, createImage, createInputTypeNumber, createParagraph, createSelect, createTitle } from "../assets/code/DOM/DOM.js"


let containerEl //elemento previamente existente na página html onde irá rodar o código aonde serão inseridos os elementos dinamicamente

export const setContainerEl = id => {
    console.log("setou")
    containerEl = document.getElementById(id)
}

export const dynamicList = (file1,file2) => {

    let containerTitleEl = createDivWithClasses("containerTitle")
    let titleEl = createTitle("Squads","title")

    let containerInfoEl = createDivWithClasses("container-x")
    let p1InfoEl = createParagraph("Confirme as informações")
    let p2InfoEl = createParagraph("Passo 3 de 3")

    let containerLista1 = createDivWithClasses("containerLista")
    let pTitleContainerListaEl1 = createParagraph("Mentores")

    containerLista1.appendChild(pTitleContainerListaEl1)

    let lista1El = createDivWithClasses("lista") 
    file1.forEach(valor => {
        let divItemListaEl = createDivWithClasses("itemLista")

        let pNameItemEl = createParagraph(valor.nome)
        let pInstEmprItemEl = createParagraph(valor.instEmpr)

        let itemColumnEl = createDivWithClasses("itemCollumn")

        itemColumnEl.appendChild(pNameItemEl)
        itemColumnEl.appendChild(pInstEmprItemEl)

        divItemListaEl.appendChild(itemColumnEl)

        lista1El.appendChild(divItemListaEl)
        
    })

    let containerLista2 = createDivWithClasses("containerLista")
    let pTitleContainerListaEl2 = createParagraph("Alunos")

    containerLista2.appendChild(pTitleContainerListaEl2)

    let lista2El = createDivWithClasses("lista")

    file2.forEach(valor => {
        let divItemListaEl = createDivWithClasses("itemLista")
        let pNameItemEl = createParagraph(valor.nome)
        let pInstEmprItemEl = createParagraph(valor.instEmpr)

        let itemColumnEl = createDivWithClasses("itemCollumn")

        itemColumnEl.appendChild(pNameItemEl)
        itemColumnEl.appendChild(pInstEmprItemEl)

        divItemListaEl.appendChild(itemColumnEl)

        lista2El.appendChild(divItemListaEl)
    })

    let containerInputEl = createDivWithClasses("containerInput")

    let divSelectInstEmprEl = createDivWithClasses("inputDiv")
    let pSelectInstEmprEl = createParagraph("Empresa Responsável")
    let selectInstEmprEl = createSelect("input")
    selectInstEmprEl.setAttribute("id","empresaResponsavel")
    
    let divInputNumeroSquad = createDivWithClasses("inputDiv")
    let pInputNumeroSquad = createParagraph("Número do Squad")
    let inputNumero = createInputTypeNumber("numeroSquad","numeroSquad")
    inputNumero.setAttribute("min","0")

    let divSelectProgramaResidenciaEl = createDivWithClasses("inputDiv")
    let pSelectProgramaResidenciaEl = createParagraph("Programa de Residência")
    let selectProgramaResidenciaEl = createSelect("input")
    selectProgramaResidenciaEl.setAttribute("id","programaResidencia")

    let divButtonsEl = createDivWithID("buttonDiv")
    let imgBackEl = createImage("../assets/global-images/next-left-2.png","Botyão com símbolo de seta apontada para a esquerda","next-button")
    let imgNextEl = createImage("../assets/global-images/icons8-ok-50.png","Botão com símbolo de OK","next-button")
    imgNextEl.setAttribute("id","ok-button")
    
    containerTitleEl.appendChild(titleEl)
    
    containerInfoEl.appendChild(p1InfoEl)
    containerInfoEl.appendChild(p2InfoEl)
    
    containerLista1.appendChild(lista1El)
    containerLista2.appendChild(lista2El)

    divSelectInstEmprEl.appendChild(pSelectInstEmprEl)
    divSelectInstEmprEl.appendChild(selectInstEmprEl)

    divInputNumeroSquad.appendChild(pInputNumeroSquad)
    divInputNumeroSquad.appendChild(inputNumero)

    divSelectProgramaResidenciaEl.appendChild(pSelectProgramaResidenciaEl)
    divSelectProgramaResidenciaEl.appendChild(selectProgramaResidenciaEl)

    containerInputEl.appendChild(divSelectInstEmprEl)
    containerInputEl.appendChild(divInputNumeroSquad)
    containerInputEl.appendChild(divSelectProgramaResidenciaEl)

    divButtonsEl.appendChild(imgBackEl)
    divButtonsEl.appendChild(imgNextEl)

    containerEl.appendChild(containerTitleEl)
    containerEl.appendChild(containerInfoEl)
    containerEl.appendChild(containerLista1)
    containerEl.appendChild(containerLista2)
    containerEl.appendChild(containerInputEl)
    containerEl.appendChild(divButtonsEl)
}
