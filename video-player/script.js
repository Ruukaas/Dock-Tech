const trilha = {
    modulo: {
        aula:{
            titulo: "O que é Banco de Dados?",
            link: "https://www.youtube.com/embed/Ofktsne-utM"
        },
        aula: {
            titulo: "Instalando o MySQL",
            link:"https://www.youtube.com/embed/5JbAOWJbgIA"
        }
    },
    modulo: {
        aula: {
            titulo:"Criando o primeiro banco de Dados",
            link: "https://www.youtube.com/embed/m9YPlX0fcJk"
        }

    }
}
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

const newVideoExternal = src => {
    videoExternalEL.classList.replace("src", src)
}

const dynamicTrilha = () => {
    
}


