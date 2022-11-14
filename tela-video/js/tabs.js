const changeTabs = (eventTarget) => {
    removeAllTabActive()
    removeAllContentTab()
    setTabActive(eventTarget.target.parentNode)
}


const removeAllContentTab = () => {
    document.getElementById("append").innerHTML = ""
}

const tabs = Array.prototype.slice.call(document.getElementsByClassName("item"))

tabs.forEach(valor => {
    valor.addEventListener("click", changeTabs)
})

const setTabActive = element => element.classList.add("active")

const removeAllTabActive = () => {
    tabs.forEach(valor => valor.classList.remove("active"))
}

const setContentOfContentTab = (tab) => {


    switch(tab) {
        case "comments":

        break
        case "exercises":

        break
        case "notes":

        break
        case "comments":

        break
    }
}

let contentTabEl = document.getElementById("append")

const setComments = () => {
    
}

///////////////////////////////////////////////////////////////////////////
// window.addEventListener("load", function(){
    // const abaAnotacao = document.querySelector("#abaAnotacao");
    // abaAnotacao.addEventListener("click", mudarAnotacao);
// });

function mudarAnotacao(){

    const appendDiv = document.querySelector('#append');
    const abaAnotacao = document.querySelector('#abaAnotacao');
    abaAnotacao.setAttribute('id','active');
    
    const containerAnotacao = document.createElement('div');
    containerAnotacao.setAttribute("id", "containerAnotacao");

    const div1 = document.createElement('div'); 
    div1.classList.add("itemAnotacao");

    const div2 = document.createElement('div');
    div2.classList.add("itemAnotacao");

    const textElement = document.createElement('p');
    const value = document.createTextNode("Criar uma nova anotacao em 10:32");
    textElement.appendChild(value);

    const addButton = document.createElement("i");
    addButton.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';

    div1.appendChild(textElement);
    containerAnotacao.appendChild(div1);

    div2.appendChild(addButton);
    containerAnotacao.appendChild(div2);

    appendDiv.appendChild(containerAnotacao);

    addButton.addEventListener("click", anotacaoTransicao, {once:true});
    addButton.addEventListener('click', () => containerAnotacao.remove());

}

function anotacaoTransicao() {
    const div1 = document.createElement('div');
    div1.classList.add('itemAnotacao');

    const videoTimer = document.createElement('p');
    const timerValue = document.createTextNode("TESTE");
    videoTimer.appendChild(timerValue);
    videoTimer.setAttribute("id", "videoTimer");

    const annotationBox = document.createElement('textarea');
    annotationBox.setAttribute("id", "annotationBox");

    const div2 = document.createElement('div2');
    div2.setAttribute("id", "div2");

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Salvar Anotacao';
    saveButton.setAttribute("id", "saveButton");

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancelar';
    cancelButton.setAttribute("id", "cancelButton");

    const containerAnotacao = document.querySelector('#append');
    div1.appendChild(videoTimer);
    div1.appendChild(annotationBox);
    containerAnotacao.appendChild(div1);

    div2.appendChild(saveButton);
    div2.appendChild(cancelButton);
    containerAnotacao.appendChild(div2);
}