let nextButtonLeft = document.querySelector(".next-button");
nextButtonLeft.addEventListener("click", back);
function back(){
  window.location.href = "../tela-adm-squads-passo2/tela-adm-squads-passo2.html";
}

//Botao next voltando para o passo 1 da criacao
const exitButton = document.querySelector(".exit-button");

exitButton.onclick = function(){
  window.location.href = "../tela-adm-squads-inicial/tela-adm-squads.html";
}