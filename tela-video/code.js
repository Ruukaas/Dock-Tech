const trilha = {
    module1: {
        title: "Introdução a banco de dados",
        lesson1: {
            lessonTitle: "O que é Banco de Dados?",
            videoType: "external",
            link: "https://www.youtube.com/embed/Ofktsne-utM"
        },
        lesson2: {
            lessonTitle: "Instalando o MySQL",
            videoType: "external",
            link: "https://www.youtube.com/embed/5JbAOWJbgIA"
        }
    },
    module2: {
        title: "MySQL",
        lesson1: {
            lessonTitle: "Criando o primeiro banco de Dados",
            videoType: "external",
            link: "https://www.youtube.com/embed/m9YPlX0fcJk"
        },
        lesson2: {
            lessonTitle: "dogo do fim da aula",
            videoType: "internal",
            link: "../dogo.mp4"
        }

    }
}


const createModule = (text) => {
    let li = document.createElement("li")
    li.classList.add("module")
    li.textContent = text
    return li

}

//Lesson para não colocar class e confundir com o do HTML
const createLessonsModule = () => {
    let ol = document.createElement("ol")
    ol.classList.add("sub-module")
    return ol;
}

const changeVideoTitle = title => {
    document.getElementById("video-player-title").textContent = title;
}

const createLesson = (lesson) => {
    let li = document.createElement("li")
    li.classList.add("lesson")
    li.textContent = lesson.lessonTitle
    let videoPlayer
    if (isExternal(lesson))  videoPlayer = document.getElementById("video-external") 
    else if(isInternal(lesson)) videoPlayer = document.getElementById("video-input")
    

    li.addEventListener("click", () => {
        videoPlayer.src = lesson.link
        changeCurrentVideo(lesson)
    })

    return li;
}

const dynamicTrilha = (trilhaJSON) => {
    const trilhaEL = document.getElementById("trilha")
    let summaryEL = document.createElement("ol")
    summaryEL.classList.add("summary")


    Object.keys(trilhaJSON).forEach((valor) => {
        let module = createModule(trilhaJSON[valor].title)
        let subModule = createLessonsModule();
        let contentModuleArray = Object.values(trilhaJSON[valor])
        contentModuleArray.shift() //Tirando o title do módulo

        console.log(contentModuleArray)

        contentModuleArray.forEach((value) => {

            let lesson = createLesson(value)
            subModule.appendChild(lesson)

        })
        module.appendChild(subModule)

        summaryEL.appendChild(module)
    })

    trilhaEL.appendChild(summaryEL)
}

const changeCurrentVideo = lesson => {

    let videoExternalEL = document.getElementById("video-external")
    let videoInputEL = document.getElementById("video-input")

    switch(lesson.videoType) {
        case "external":
            if(videoExternalEL.classList.contains("invisible")) {
                videoInputEL.classList.add("invisible")
                videoExternalEL.classList.remove("invisible")
            }
        break
        case "internal":
            if(videoInputEL.classList.contains("invisible")) {
                videoExternalEL.classList.add("invisible")
                videoInputEL.classList.remove("invisible")
            }
        break
    }

    changeVideoTitle(lesson.lessonTitle)

    
    
}

const isExternal = lesson => {
    if (lesson.videoType == "external") {
        return true
    } else return false;
}

const isInternal = lesson => {
    if (lesson.videoType == "internal") {
        return true;
    } else return false;
}


dynamicTrilha(trilha)