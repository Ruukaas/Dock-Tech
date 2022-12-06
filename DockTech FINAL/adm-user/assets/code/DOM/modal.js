import { createDivWithClasses, createDivWithID, createSubTitle } from "./DOM.js";

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
  