import { createDivWithClasses, createDivWithID, createInputWithID, createParagraph, createSubTitle } from "./DOM.js";

export const openModal = (modalEl,fadeEl) => {
    fadeEl.style.display = "flex";
    modalEl.style.display = "flex";
}

export const closeModal = (modalEl,fadeEl) => {
    modalEl.style.display = "none"
    fadeEl.style.display = "none"
}

export const declineActionModal = (modalEl,fadeEl) => {
    modalEl.style.display = "none";
    fadeEl.style.display = "none";
}

export const createModalConfirmDelete = (titleModalMsg,modalConfirmMsg,modalCancelMsg) => {
    let fadeDivEl = createDivWithID("fade")

    let myModalDiv = createDivWithID("myModal")
    myModalDiv.classList.add("modal")

    let itemFlex1DivEl = createDivWithClasses("itemFlex")

    let titleContainerDivEl = createDivWithID("title-container")
    let titleModalh2El = createSubTitle(titleModalMsg)

    let itemFlex2DivEl =  createDivWithClasses("itemFlex")

    let modalConfirmDivEl = createDivWithID("modalConfirm")
    modalConfirmDivEl.innerText = modalConfirmMsg
    
    let modalCancelDivEl = createDivWithID("modalCancel")
    modalCancelDivEl.innerText = modalCancelMsg

    titleContainerDivEl.appendChild(titleModalh2El)


    itemFlex1DivEl.appendChild(titleContainerDivEl)

    itemFlex2DivEl.appendChild(modalConfirmDivEl)
    itemFlex2DivEl.appendChild(modalCancelDivEl)

    myModalDiv.appendChild(itemFlex1DivEl)
    myModalDiv.appendChild(itemFlex2DivEl)

    fadeDivEl.appendChild(myModalDiv)

    document.getElementsByTagName("body")[0].appendChild(fadeDivEl)
}

export const createModalLesson = () => {
    let fadeDivEl = createDivWithID("fade")

    let myModalDiv = createDivWithID("myModal")
    myModalDiv.classList.add("modal")

    let itemFlex1DivEl = createDivWithClasses("itemFlex")
    let titleContainerDivEl = createDivWithID("title-container")
    let titleModalh2El = createSubTitle("Conteúdo")

    let itemFlex2DivEl =  createDivWithClasses("itemFlex")
    let divTituloVideoEl = createDivWithClasses("itemClasses")
    let pTituloVideoEl = createParagraph("Título do Vídeo")
    let inputTituloVideo = createInputWithID("titleVideo","text","titleVideo")

    let itemFlex3DivEl = createDivWithClasses("itemFlex")
    let divLinkVideo = createDivWithClasses("itemClasses")
    let pLinkVideoEl = createParagraph("Link do vídeo")
    let inputLinkVideo = createInputWithID("linkVideo","text","linkVideo")




    titleContainerDivEl.appendChild(titleModalh2El)

    divTituloVideoEl.appendChild(pTituloVideoEl)
    divTituloVideoEl.appendChild(inputTituloVideo)

    divLinkVideo.appendChild(pLinkVideoEl)
    divLinkVideo.appendChild(inputLinkVideo)


    itemFlex1DivEl.appendChild(titleContainerDivEl)

    itemFlex2DivEl.appendChild(divTituloVideoEl)

    itemFlex3DivEl.appendChild(divLinkVideo)

    myModalDiv.appendChild(itemFlex1DivEl)
    myModalDiv.appendChild(itemFlex2DivEl)
    myModalDiv.appendChild(itemFlex3DivEl)

    fadeDivEl.appendChild(myModalDiv)

    document.getElementsByTagName("body")[0].appendChild(fadeDivEl)
}

  