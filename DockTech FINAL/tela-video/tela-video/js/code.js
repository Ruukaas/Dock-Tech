//API Script
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

import {trilha} from "./currentTrilha.js"
import {dynamicTrilha} from "./trilha.js"
import {saveCurrentStats} from "./control.js"
import {responsiveVideo, onPlayerReady, onPlayerStateChange, buildExternalVideo} from "./video-player.js"

dynamicTrilha(trilha)

window.addEventListener("beforeunload", saveCurrentStats)
responsiveVideo();
let firstV = window.document.getElementById("first-video");

window.onload = function(){
    window.document.getElementById("first-video").src = trilha.modules[0].lessons[0].link
}



