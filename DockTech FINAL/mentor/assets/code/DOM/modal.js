import { createDivWithClasses, createDivWithID, createImage, createInputWithID, createParagraph, createSubTitle } from "./DOM.js";

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
    let imgCloseModal = createImage("../assets/global-images/x.png","ícone de X","closeModal")
    imgCloseModal.setAttribute("id","closeModal")
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

    let itemFlex4DivEl = createDivWithClasses("itemFlex")
    let imgConfirmModal = createImage("../assets/global-images/ok.png","ícone de ok","confirmModal")
    imgConfirmModal.setAttribute("id","confirmModal")




    titleContainerDivEl.appendChild(titleModalh2El)

    divTituloVideoEl.appendChild(pTituloVideoEl)
    divTituloVideoEl.appendChild(inputTituloVideo)

    divLinkVideo.appendChild(pLinkVideoEl)
    divLinkVideo.appendChild(inputLinkVideo)


    itemFlex1DivEl.appendChild(titleContainerDivEl)
    itemFlex1DivEl.appendChild(imgCloseModal)

    itemFlex2DivEl.appendChild(divTituloVideoEl)

    itemFlex3DivEl.appendChild(divLinkVideo)

    itemFlex4DivEl.appendChild(imgConfirmModal)

    myModalDiv.appendChild(itemFlex1DivEl)
    myModalDiv.appendChild(itemFlex2DivEl)
    myModalDiv.appendChild(itemFlex3DivEl)
    myModalDiv.appendChild(itemFlex4DivEl)

    fadeDivEl.appendChild(myModalDiv)

    document.getElementsByTagName("body")[0].appendChild(fadeDivEl)
}

export const createModalSquadView = () => {
    let fadeDivEl = createDivWithID("fade")

    let myModalDiv = createDivWithID("myModal")
    myModalDiv.classList.add("modal")

    let itemFlex1DivEl = createDivWithClasses("itemFlex")
    let imgCloseModal = createImage("../assets/global-images/x.png","ícone de X","closeModal")
    imgCloseModal.setAttribute("id","closeModal")
    let titleContainerDivEl = createDivWithID("title-container")
    let titleModalh2El = createSubTitle("Squad X")

    let itemFlex2DivEl =  createDivWithClasses("itemFlex")
    let divNomeMembroSquad = createDivWithClasses("itemClasses")
    let pTituloAluno = createParagraph("Jose Pedro")


    let itemFlex3DivEl = createDivWithClasses("itemFlex")
    let divInformações = createDivWithClasses("itemClasses")
    let pStatusAluno = createParagraph("1 de 12 vídeos vistos| 8,3% concluído| 100% de presença nas mentorias")

    let itemFlex4DivEl =  createDivWithClasses("itemFlex")
    let divNomeMembroSquad2 = createDivWithClasses("itemClasses")
    let pTituloAluno2 = createParagraph("Larissa Alves")


    let itemFlex5DivEl = createDivWithClasses("itemFlex")
    let divInformações2 = createDivWithClasses("itemClasses")
    let pStatusAluno2 = createParagraph("1 de 12 vídeos vistos| 8,3% concluído| 100% de presença nas mentorias")


    titleContainerDivEl.appendChild(titleModalh2El)

    divNomeMembroSquad.appendChild(pTituloAluno)
    divNomeMembroSquad2.appendChild(pTituloAluno2)
   

    divInformações.appendChild(pStatusAluno)

    divInformações2.appendChild(pStatusAluno2)

    
  


    itemFlex1DivEl.appendChild(titleContainerDivEl)
    itemFlex1DivEl.appendChild(imgCloseModal)

    itemFlex2DivEl.appendChild(divNomeMembroSquad)

    itemFlex3DivEl.appendChild(divInformações)
    
    itemFlex4DivEl.appendChild(divNomeMembroSquad2)
    
    itemFlex5DivEl.appendChild(divInformações2)
    


    myModalDiv.appendChild(itemFlex1DivEl)
    myModalDiv.appendChild(itemFlex2DivEl)
    myModalDiv.appendChild(itemFlex3DivEl)
    myModalDiv.appendChild(itemFlex4DivEl)
    myModalDiv.appendChild(itemFlex5DivEl)

    fadeDivEl.appendChild(myModalDiv)

    document.getElementsByTagName("body")[0].appendChild(fadeDivEl)
}