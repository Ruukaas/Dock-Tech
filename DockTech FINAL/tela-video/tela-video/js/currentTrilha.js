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
export const trilha = {
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
                }
            ]
        }, {
            title:"Trailers",
            lessons: [
                {
                    lessonTitle: "Oficial Trailer 1 - Bleach",
                    videoType:"external",
                    link: "https://www.youtube.com/embed/1sygUhb8Q2Y"
                },
                {
                    lessonTitle: "Oficial Trailer 2 - Bleach",
                    videoType:"external",
                    link: "https://www.youtube.com/embed/fzR82oXbjnY"
                },
                {
                    lessonTitle:"Oficial Trailer 3 - Bleach",
                    videoType:"external",
                    link: "https://www.youtube.com/embed/78WIYzX_m98"
                }
            ]
        }]
}