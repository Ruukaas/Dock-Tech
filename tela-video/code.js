//Estrutura dos objetos:
//Trilha
// Um atributo título: String
// Um atributo fases da residência : Array[String]
// Um atributo módulos : Array (cada espaço do array com um objeto modulo)
//  
// Modulo
// Um atributo titulo: String
// Um atributo lessons : Array (cada espaço do array com um objeto lesson)
//
//lesson
// Um atríbuto lessonTitle : String
// Um atributo videoType: String
// Um atributo link: String

const trilha = {
    title: "Banco de Dados",
    residenceStage: ["Grow Up"],
    modules: [
        {
            title: "Introdução a banco de dados",
            lessons: [
                {
                    lessonTitle: "O que é Banco de Dados?",
                    videoType: "external",
                    link: "https://www.youtube.com/embed/Ofktsne-utM"
                },
                {
                    lessonTitle: "Instalando o MySQL",
                    videoType: "external",
                    link: "https://www.youtube.com/embed/5JbAOWJbgIA"
                }
            ]
        },
        {
            title: "MySQL",
            lessons: [
                {
                    lessonTitle: "Criando o primeiro banco de Dados",
                    videoType: "external",
                    link: "https://www.youtube.com/embed/m9YPlX0fcJk"
                },
                {
                    lessonTitle: "dogo do fim da aula",
                    videoType: "internal",
                    link: "../dogo.mp4"
                }
            ]
        }]
}

let player //Objeto do videoPlayer
let secondsVideoPlayer
let currentTypeVideo

//API Script
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

console.log(trilha.modules[0].lessons[0].link.slice(30) === 'Ofktsne-utM')

//Modificar depois para começar no vídeo que parou
//Função chamada quando o script da API do youtube é carregada
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-external', {
        height: '720',
        width: '1280',
        //Primeiro vídeo da trilha
        videoId: trilha.modules[0].lessons[0].link.slice(30),
        events: {
            'onStateChange': saveCurrentTimeExternal
        }
    })

    currentTypeVideo = trilha.modules[0].lessons[0].videoType
    player.getTypeVideo

}

//DOM
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

const changeCurrentTypeVideo = (videoType) => {
    currentTypeVideo = videoType
}

const createLesson = (lesson) => {
    let li = document.createElement("li")
    li.classList.add("lesson")
    li.textContent = lesson.lessonTitle
    li.addEventListener("click", () => {
        reBuildIframe(lesson.link, lesson.videoType)
        changeCurrentTypeVideo(lesson.videoType)
        changeVideoTitle(lesson.lessonTitle)
        windowAndVideoPlayerListenerSaveCurrentTime(lesson.videoType)
    })

    return li;
}

const reBuildIframe = (link, videoType) => {
    if(currentTypeVideo = "external") {
        player.destroy()
    } else if(currentTypeVideo = "internal") {
        player.remove()
    }
    switch (videoType) {
        case "external":
            player = new YT.player("video-external", {
                height: "720",
                width: "1280",
                videoId: link.slice(30), //A partir do 30 fica apenas o ID do link
                events: {
                    'onStateChange': saveCurrentTimeExternal
                }
            })
            break
        case "internal":
            
            player = document.createElement("iframe")
            player.setAttribute("id", "video-input")
            player.setAttribute("src", link)
            player.setAttribute("width", 1280)
            player.setAttribute("height", 720)
            player.setAttribute("controls", "true")
            document.getElementById("video-internal").appendChild(player)


    }

}


const dynamicTrilha = (trilhaJSON) => {
    const trilhaEL = document.getElementById("trilha")
    let summaryEL = document.createElement("ol")
    summaryEL.classList.add("summary")

    console.log(trilhaJSON.modules)
    trilhaJSON.modules.forEach((valor) => {
        let module = createModule(valor.title)
        let subModule = createLessonsModule();
        let contentModuleArray = valor.lessons

        contentModuleArray.forEach((value) => {

            let lesson = createLesson(value)
            subModule.appendChild(lesson)

        })
        module.appendChild(subModule)

        summaryEL.appendChild(module)
    })

    trilhaEL.appendChild(summaryEL)
}
let videoExternalEL = document.getElementById("video-external")
let videoInputEL = document.getElementById("video-input")

const changeCurrentVideo = lesson => {
    switch (lesson.videoType) {
        case "external":
            if (videoExternalEL.classList.contains("invisible")) {
                videoInputEL.classList.add("invisible")
                videoExternalEL.classList.remove("invisible")
            }
            break
        case "internal":
            if (videoInputEL.classList.contains("invisible")) {
                videoExternalEL.classList.add("invisible")
                videoInputEL.classList.remove("invisible")
                reBuildIframe(lesson.link, lesson.videoType)
            }
            break
    }

    changeVideoTitle(lesson.lessonTitle)


}

// const isExternal = lesson => {
//     if (lesson.videoType == "external") {
//         return true
//     } else return false;
// }

// const isInternal = lesson => {
//     if (lesson.videoType == "internal") {
//         return true;
//     } else return false;
// }


dynamicTrilha(trilha)

const saveCurrentTimeExternal = () => {
    secondsVideoPlayer = player.getCurrentTime()
    console.log("ext" + secondsVideoPlayer)
}

const saveCurrentTimeInternal = () => {
    secondsVideoPlayer = player.currentTime
    console.log("int" + secondsVideoPlayer)
}

const windowAndVideoPlayerListenerSaveCurrentTime = (videoType) => {
    switch (videoType) {
        case "external":
            window.removeEventListener("beforeunload", saveCurrentTimeInternal)
            window.addEventListener("beforeunload", saveCurrentTimeExternal)
            
            break
        case "internal":
            window.removeEventListener("beforeunload", saveCurrentTimeExternal)
            window.addEventListener("beforeunload", saveCurrentTimeInternal)
            break
    }
}
