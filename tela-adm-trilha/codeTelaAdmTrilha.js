//botton add going to telaTrilha2
let add = document.getElementById("addButton");
add.addEventListener("click", next);
function next(){
  window.location.href = "../telaAdmTrilha2/telaAdmTrilha2.html";
}
// Get the modal
const modal = document.getElementById("myModal");
console.log("teste");
// Get the button that opens the modal
const deleteButton = document.getElementById("deleteButton");

const confirmDelete = document.getElementById("modalDelete");

const cancelDelete = document.getElementById("modalCancel");

// Get the <span> element that closes the modal
const span = document.getElementById("close");

// When the user clicks on the button, open the modal
deleteButton.onclick = function() {
  modal.style.display = "flex";
  console.log("teste2");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("modalDelete").onclick = function() {
  modal.style.display = "none";
}

document.getElementById("modalCancel").onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}