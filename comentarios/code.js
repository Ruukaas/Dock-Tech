window.addEventListener("load", function () {
    const questionButton = document.querySelector('#question-generator');
    questionButton.addEventListener('click', createComment);
    questionButton.addEventListener('click', () => questionButton.classList.add("invisible"));
});

function createComment() {

    const container = document.querySelector('#container');
    container.removeEventListener('click', createComment);
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

    postButton.addEventListener("click", function () {
        if (!(commentBox.value == null || titleBox.value == null)) {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add('item');

            const commentBoxValue = commentBox.value;
            const titleBoxValue = titleBox.value;

            commentBox.value = "";
            titleBox.value = "";


            const title = document.createElement("p");
            const titleText = document.createTextNode(titleBoxValue);
            title.appendChild(titleText);
            document.getElementById

            const comment = document.createElement("p");
            const text = document.createTextNode(commentBoxValue);
            comment.appendChild(text);

            commentDiv.appendChild(title);
            commentDiv.appendChild(comment);

            document.getElementById("container").appendChild(commentDiv);
        }



    });

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute("id", "cancel");
    cancelButton.textContent = 'Cancelar';

    cancelButton.addEventListener("click", () => {
        div1.remove();
        div2.remove();
        button.classList.remove("invisible");
    });


    div1.appendChild(titleText);
    div1.appendChild(titleBox);
    div1.appendChild(commentText);
    div1.appendChild(commentBox);
    container.appendChild(div1);

    div2.appendChild(postButton);
    div2.appendChild(cancelButton);
    container.appendChild(div2);

}
