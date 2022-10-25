//API Script
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

import {trilha} from "./currentTrilha.js"
import {dynamicTrilha} from "./trilha.js"
import {saveCurrentStats} from "./control.js"
import {responsiveVideo} from "./video-player.js"

dynamicTrilha(trilha)

window.addEventListener("beforeunload", saveCurrentStats)
responsiveVideo();