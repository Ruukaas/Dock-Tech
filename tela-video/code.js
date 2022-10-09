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

//TODO - Ao trocar de aba, página, clicar em um link que vai levar para outra página, chamar a função saveCurrentStats
//TODO - Criar a função de nextVideo, criar variável currentLesson, adaptar o dynamic trilha para o arrayLessons, organizar as chamadas de salvar status, criar progresso da trilha inteira
const trilha = {
    title: "Banco de Dados",
    residenceStage: ["Grow Up"],
    modules: [
        {
            title: "Introdução a banco de dados",
            lessons: [
                {
                    lessonTitle: "dogo do fim da aula",
                    videoType: "internal",
                    link: "../dogo.mp4"
                },
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
let currentSecondsVideoPlayer //O tempo salvo do video no momento
let currentTypeVideo //O tipo do vídeo do momento
let progressTrilha // Porcentagem da trilha que foi concluída
let isCurrentVideoFinished //boolean que vai indicar se o vídeo do momento foi concluído
let percentageCompletedTrilha //Porcentagem da trilha
let currentVideoPlayerTimeComplete //Temp em segundos do vídeo completo 
let arrayLessons = []//array com todas as aulas da trilha corrente
let isLessonsConcludedArray = [] //array que vai dizer na posição da vídeo aula se aquele vídeo foi concluído ou não 
let currentPositionOrder 


trilha.modules.forEach(valor => {
    valor.lessons.forEach(valor => {
        arrayLessons.push(valor)
        isLessonsConcludedArray.push(false) //Por padrão cada posição do array é falsa, é colocado aqui para que ele tenha a mesma quantidade de falses da quantidade de aula
    })
})

const pushLessonConcludedArray = (position) => {
    isLessonsConcludedArray[position] = true
    console.log(isLessonsConcludedArray)
}

const isTrilhaCompleted = () => {
    let isCompleted = false
    isCompleted = isLessonsConcludedArray.every(valor => valor)
    return isCompleted
}

//API Script
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Primeira função a ser chamada na página
//Função chamada quando o script da API do youtube é carregada
function onYouTubeIframeAPIReady() {
    let firstLessonLink = trilha.modules[0].lessons[0].link
    let firstLessonVideoType = trilha.modules[0].lessons[0].videoType
    let firstLessonTitle = trilha.modules[0].lessons[0].lessonTitle

    reBuildIframe(firstLessonLink,firstLessonVideoType)
    changeCurrentTypeVideo(firstLessonVideoType)
    changeVideoTitle(firstLessonTitle)
    changeCurrentPositionOrder(0)
}

const changeCheckBox = () => {
    
    document.getElementsByName(currentPositionOrder)[0].setAttribute("checked","checked")
}

let countPositionOrder
//DOM Video/Trilha
const dynamicTrilha = (trilhaJSON) => {
    countPositionOrder = 0
    const trilhaEL = document.getElementById("trilha")
    let summaryEL = document.createElement("ol")
    summaryEL.classList.add("summary")

    trilhaJSON.modules.forEach((valor) => {
        let module = createModule(valor.title)
        let subModule = createLessonsModule();
        let contentModuleArray = valor.lessons

        contentModuleArray.forEach((value) => {
            let lesson = createLesson(value)
            let checkbox = createCheckbox()

            lesson.appendChild(checkbox)
            countPositionOrder++
            subModule.appendChild(lesson)
        })

        module.appendChild(subModule)
        summaryEL.appendChild(module)
    })
    trilhaEL.appendChild(summaryEL)
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

const createLesson = (lesson) => {
    let div = document.createElement("div")
    div.classList.add("lesson")
    let li = document.createElement("li")
    li.textContent = lesson.lessonTitle
    li.setAttribute("id", countPositionOrder) 
    li.addEventListener("click", (eventTarget) => {
        changeCurrentPositionOrder( Number(eventTarget.target.id))
        saveCurrentStats()
        deletePreviousVideo()
        changeCurrentTypeVideo(lesson.videoType)
        reBuildIframe(lesson.link, lesson.videoType)
        changeVideoTitle(lesson.lessonTitle)
    })
    div.appendChild(li)
    return div;
}

const createCheckbox = () => {
    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("name", countPositionOrder)
    checkbox.setAttribute("disabled","disabled")
    
    return checkbox
}

const changeCurrentPositionOrder = position => currentPositionOrder = position

const reBuildIframe = (link, videoType) => {
    switch (videoType) {
        case "external":
            buildExternalVideo(link.slice(30)) //A partir do 30 só fica o ID do link
            break
        case "internal":
            buildInternalVideo(link)
            break
    }
}

const buildExternalVideo = videoID => {
    player = new YT.Player('video-external', {
        height: '720',
        width: '1280',
        //Primeiro vídeo da trilha
        videoId: videoID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    })
}

const buildInternalVideo = link => {

    let isCurrentTimeSaved = false

    player = document.createElement("video")
    player.setAttribute("src", link)
    player.setAttribute("width", 1280)
    player.setAttribute("height", 720)
    player.setAttribute("controls", "true")
    player.setAttribute("autoplay","autoplay")

    player.addEventListener("play", () => {
        if(!isCurrentTimeSaved) {
            changecurrentVideoPlayerTimeComplete()
            !!isCurrentTimeSaved
        }
        saveCurrentStats()
    })
    player.addEventListener("pause", saveCurrentStats )
    player.addEventListener("ended", () => {
        currentSecondsVideoPlayer = currentVideoPlayerTimeComplete
        console.log(currentPositionOrder)
        pushLessonConcludedArray(currentPositionOrder)
        changeCheckBox()

    } )
    
    document.getElementById("video-internal").appendChild(player)
}

const onPlayerEnded = (position) => {

}

const onPlayerReady = () => {
    player.playVideo()
    changecurrentVideoPlayerTimeComplete()
}

const onPlayerStateChange = (objectEvent) => {
    saveCurrentStats()
    if(objectEvent.data == YT.PlayerState.ENDED) {
        console.log("cabo")
        pushLessonConcludedArray(currentPositionOrder)
        changeCheckBox(currentPositionOrder)
    }
}

const deletePreviousVideo = () => {
    switch (currentTypeVideo) {
        case "external":
            player.destroy()
            break
        case "internal":
            player.remove()
            break
    }
    player = null
}

const changeVideoTitle = title => {
    document.getElementById("video-player-title").textContent = title;
}

//Control and Save Status
const saveCurrentStats = () => {
    switch (currentTypeVideo) {
        case "external":
            changeCurrentSecondsVideoPlayer(Math.ceil(player.getCurrentTime()))
            console.log("extStas" + currentSecondsVideoPlayer)      
            break
        case "internal":
            changeCurrentSecondsVideoPlayer(Math.ceil(player.currentTime))
            console.log("intStats" + currentSecondsVideoPlayer)
            break;
    }
}

const changeCurrentTypeVideo = (videoType) => {
    currentTypeVideo = videoType
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

window.addEventListener("beforeunload", saveCurrentStats)

//Progress bar

//percent/100 * all = part | percent = part *100/all 
const percentageCalc = (part , all) => {
    let percent = ((part * 100)/all).toFixed(2)
    return percent
}


const changeCurrentSecondsVideoPlayer = sec => {
    currentSecondsVideoPlayer = sec
}

const changecurrentVideoPlayerTimeComplete = () => {
    switch(currentTypeVideo) {
        case "external":
            currentVideoPlayerTimeComplete = player.getDuration()
            console.log("extComplete|" + currentVideoPlayerTimeComplete)
            break;
        case "internal":
            currentVideoPlayerTimeComplete = player.duration
            console.log("intComplete|" +  currentVideoPlayerTimeComplete)
            break;
    }
}

//tabs

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


