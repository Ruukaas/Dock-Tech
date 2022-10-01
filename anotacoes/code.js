const body = document.querySelector('body');

window.addEventListener("load", function () {
    const addButton = document.querySelector('#addButton');
    const container = document.querySelector('#container');
    addButton.addEventListener('click', createAnnotation);
    addButton.addEventListener('click', () => container.remove());
});


function createAnnotation(){
    const div1 = document.createElement('div');
    div1.classList.add('item');

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

    cancelButton.addEventListener("click", () => {
        div1.remove();
        div2.remove();
        body.appendChild(container);
    });

    const container = document.querySelector('#append');
    div1.appendChild(videoTimer);
    div1.appendChild(annotationBox);
    container.appendChild(div1);

    div2.appendChild(saveButton);
    div2.appendChild(cancelButton);
    container.appendChild(div2);
};
