
const videoExternalEL = document.getElementById("video-external") //0
const videoInputEL = document.getElementById("video-input") //1

let currentTime

setInterval(() => {
    console.log(videoExternalEL.currentTime)
},1000)

const currentMinuteUpload = () => {
    currentTime = videoInputEL.currentTime
    return currentTime
}

const currentMinuteExternal = () => {
    currentTime 
}


const isExternalOrInput = () => {
    videoExternalEL.classList.forEach((value) => {
        if((value == "active"))
            return 0; 
    })

    videoInputEL.classList.forEach((value) => {
        if(value=="active")
        return 1;
    })
}

const saveTheMinute = () => {
    if(isExternalOrInput) { //external
        current
    }
}








