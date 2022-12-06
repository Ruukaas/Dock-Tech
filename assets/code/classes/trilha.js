export class trilha {
    constructor(title, residenceStageArray) {
        this.title = title
        this.residenceStageArray = residenceStageArray
    }

    modules = []

    setModules(modulo) {
        this.modules.push(modulo)
    }
}

export class modulo {
    constructor(title) {
        this.title = title
    }

    lessons = []
    setLessons(lesson) {
        this.lessons.push(lesson)
    }
}

export class lesson {
    constructor(lessonTitle, videoType, link) {
        this.lessonTitle = lessonTitle
        this.videoType = videoType
        this.link = link
    }
}
