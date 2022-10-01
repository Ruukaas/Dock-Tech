window.addEventListener("load", function(){
    const abaAnotacao = document.querySelector("#abaAnotacao");
    abaAnotacao.addEventListener("click", mudarAnotacao);
});

function mudarAnotacao(){

    const appendDiv = document.querySelector('#append');
    
    const containerAnotacao = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    const textElement = document.createElement('p');
    const value = document.createTextNode("Criar uma nova anotacao em 10:32");
    textElement.appendChild(value);

    div1.appendChild(textElement);
    containerAnotacao.appendChild(div1);
    appendDiv.appendChild(containerAnotacao);

}