// let nextButtonLeft = document.querySelector(".next-button");
// nextButtonLeft.addEventListener("click", back);
// function back(){
//   window.location.href = "../tela-adm-squads-passo2/tela-adm-squads-passo2.html";
// }

import { get } from "../assets/code/db/CRUD.js";
import { dynamicList, setContainerEl } from "./list-squad.js"

let arrayAlunosID = JSON.parse(sessionStorage.getItem("currentSelectedAlunosArrayID"))

let arrayAlunos = []

async function setCurrentAlunos() {
  arrayAlunosID.forEach(async valor => {
    console.log(valor)
    let currentAluno = await get(valor,"usuarios")
    arrayAlunos.push(currentAluno)
    console.log(arrayAlunos)
  });
}

await setCurrentAlunos().then((valor) => console.log("a" + arrayAlunos))

setContainerEl("containerTrilha")
dynamicList(arrayAlunos,"Squads","title","checkbox-style","next-button","next-button-right","lista-de-trilhas","itemTrilha")

// //Botao next voltando para o passo 1 da criacao
// const exitButton = document.querySelector(".exit-button");

// exitButton.onclick = function(){
//   window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
// }