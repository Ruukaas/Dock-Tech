//Dynamic List
import {setContainerEl, dynamicList} from "./list-usuarios.js"
import {allUsuarios} from "./all-usuarios.js"

setContainerEl("containerTrilha")
dynamicList(allUsuarios,"Usuarios","title","lista-de-trilhas","itemTrilha")

let add = document.getElementById("addButton");
add.addEventListener("click", next);
function next(){
  window.location.href = "../tela-adm-usuarios-cadastro/tela-adm-usuario-cadastro.html";
}

