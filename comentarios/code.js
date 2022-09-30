// var post= document.getElementById("post");
// post.addEventListener("click", function(){
//     var commentBoxValue= document.getElementById("comment-box").value;
 
//     var li = document.createElement("li");
//     var text = document.createTextNode(commentBoxValue);
//     li.appendChild(text);
//     document.getElementById("unordered").appendChild(li);
 
// });


window.addEventListener("load", function(){
   document.querySelector('#question-generator').addEventListener('click', createComment);
});

function createComment(){

    const body = document.querySelector('body');
    const container = document.querySelector('#container');
    container.removeEventListener('click',createComment);
    const button = document.querySelector('#question-generator');

    
    const div1 = document.createElement('div');
    div1.classList.add('item');
    div1.setAttribute("id", "title-text-wrapper");

    const titleText = document.createElement('p');
    titleText.setAttribute("id", "title-text");
    titleText.textContent = "Insira um titulo";

    const titleBox = document.createElement('textarea');
    titleBox.setAttribute("id", "title-box");

    const commentText = document.createElement('p');
    commentText.setAttribute("id", "comment-text");
    commentText.textContent = "Digite seu comentario";

    const commentBox = document.createElement('textarea');
    commentBox.setAttribute("id", "comment-box");

    const div2 = document.createElement('div');
    div2.classList.add('item');

    const postButton = document.createElement('button');
    postButton.setAttribute("id", "post");
    postButton.textContent = 'Postar';

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute("id", "cancel");
    cancelButton.textContent = 'Cancelar';

    button.remove();
    div1.appendChild(titleText);
    div1.appendChild(titleBox);
    div1.appendChild(commentText);
    div1.appendChild(commentBox);
    container.appendChild(div1);

    div2.appendChild(postButton);
    div2.appendChild(cancelButton);
    container.appendChild(div2);


}