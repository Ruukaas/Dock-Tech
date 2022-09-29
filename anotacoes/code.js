const addButton = document.querySelector('fa-solid fa-circle-plus')
addButton = addEventListener('click', createAnnotation);


function createAnnotation(){
    const newEle = document.createElement('p');
    const addButton = document.querySelector('fa-solid fa-circle-plus')
    newEle.textContent = "TESTEEE";
    const container = document.querySelector('#append');
    container.append(newEle);
    addButton.remove();
}