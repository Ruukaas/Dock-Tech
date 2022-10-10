// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const deleteButton = document.getElementById("deleteButton");

const confirmDelete = document.querySelector(".modalDelete");

const cancelDelete = document.querySelector(".modalCancel");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
deleteButton.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

confirmDelete.onclick = function() {
  modal.style.display = "none";
}

cancelDelete.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}