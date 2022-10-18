import {player} from "./video-player.js"
import {trilha} from "./currentTrilha.js"


export let currentTypeVideo //O tipo do vídeo do momento
export let currentPositionOrder //Qual a posição do vídeo sendo reproduzido no momento na trilha
export let currentSecondsVideoPlayer //O tempo salvo do video no momento
export let currentVideoPlayerTimeComplete //Temp em segundos do vídeo completo 
export let isLessonsConcludedArray = [] //array que vai dizer na posição da vídeo aula se aquele vídeo foi concluído ou não 


trilha.modules.forEach(valor => {
    valor.lessons.forEach(valor => {
        isLessonsConcludedArray.push(false) //Por padrão cada posição do array é falsa, é colocado aqui para que ele tenha a mesma quantidade de falses da quantidade de aula
    })
})

export const changeCurrentPositionOrder = position => currentPositionOrder = position

export const saveCurrentStats = () => {
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

export const changeCurrentTypeVideo = (videoType) => {
    currentTypeVideo = videoType
}

export const changeCurrentSecondsVideoPlayer = sec => {
    currentSecondsVideoPlayer = sec
}

export const changecurrentVideoPlayerTimeComplete = () => {
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

export const isTrilhaCompleted = () => {
    let isCompleted = false
    isCompleted = isLessonsConcludedArray.every(valor => valor)
    return isCompleted
}

export const pushLessonConcludedArray = (position) => {
    isLessonsConcludedArray[position] = true
    console.log(isLessonsConcludedArray)
}


