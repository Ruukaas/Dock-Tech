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
  