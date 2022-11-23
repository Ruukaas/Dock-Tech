import { currentTypeVideo, changecurrentVideoPlayerTimeComplete, pushLessonConcludedArray, currentPositionOrder, saveCurrentStats, currentVideoPlayerTimeComplete, changeCurrentSecondsVideoPlayer } from "./control.js"
import { changeProgressBar } from "./progress-bar.js"
import { changeCheckBox } from "./trilha.js"
import { trilha } from "./currentTrilha.js"


export let player //Objeto do videoPlayer

export const reBuildIframe = (link, videoType) => {
    switch (videoType) {
        case "external":
            buildExternalVideo(link.slice(30)) //A partir do 30 só fica o ID do link
            break
        case "internal":
            buildInternalVideo(link)
            break
    }
}

export const deletePreviousVideo = () => {
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

export const changeVideoTitle = title => {
    document.getElementById("video-player-title").textContent = title;
}
// verificar tamanho da tela e redimensiona o vídeo
export const responsiveVideo = () => {
    let larguraDoVideo;
    window.addEventListener('resize', function () {
        var larguraDaPagina = window.innerWidth;       
        if (larguraDaPagina >= 1000) {
            larguraDoVideo = '650px';
        } else if (larguraDaPagina >= 720) {
            larguraDoVideo = '500px';
        } else {
            larguraDoVideo = '350px';
        }
        switch (currentTypeVideo){
            case "external":
                player.getIframe().setAttribute("width", larguraDoVideo);
                break;
            case "internal":
                player.setAttribute("width", larguraDoVideo);
                break;
        }
        
    });
}

//External
export const buildExternalVideo = videoID => {
    if(window.innerWidth>=1000){
        player = new YT.Player('video-external', {
            //height: '720px',
            width: '650px',
            //Primeiro vídeo da trilha
            videoId: videoID,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        })
    }else if(window.innerWidth>=720){
        player = new YT.Player('video-external', {
            //height: '720px',
            width: '500px',
            //Primeiro vídeo da trilha
            videoId: videoID,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        })
    }else{
        player = new YT.Player('video-external', {
            //height: '720px',
            width: '350px',
            //Primeiro vídeo da trilha
            videoId: videoID,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        })
    }
    
}

export const onPlayerStateChange = (objectEvent) => {
    if (objectEvent.data == YT.PlayerState.ENDED) {
        onPlayerEnded()
    }
    saveCurrentStats()
}

export const onPlayerReady = () => {
    player.playVideo()
    changecurrentVideoPlayerTimeComplete()
}

export const onPlayerEnded = () => {
    changeCurrentSecondsVideoPlayer(currentVideoPlayerTimeComplete)
    pushLessonConcludedArray(currentPositionOrder)
    changeCheckBox(currentPositionOrder)
    changeProgressBar()
}

//Internal
export const buildInternalVideo = link => {

    let isCurrentTimeSaved = false

    player = document.createElement("video")
    player.setAttribute("src", link)
    
    if(window.innerWidth>=1000){
        player.setAttribute("width", 650)
    }else if(window.innerWidth>=720){
        player.setAttribute("width", 500)
    }else{
        player.setAttribute("width", 350)
    }
    
    player.setAttribute("controls", "true")
    player.setAttribute("autoplay", "autoplay")

    player.addEventListener("play", () => {
        if (!isCurrentTimeSaved) {
            changecurrentVideoPlayerTimeComplete()
            !!isCurrentTimeSaved
        }
        saveCurrentStats()
    })
    player.addEventListener("pause", saveCurrentStats)
    player.addEventListener("ended", onPlayerEnded)

    document.getElementById("video-internal").appendChild(player)
}





