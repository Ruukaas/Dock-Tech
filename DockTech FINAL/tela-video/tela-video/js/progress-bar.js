//percent/100 * all = part | percent = part *100/all
import { isLessonsConcludedArray } from "./control.js"

const getWidthProgressConcluded = (width = 428,part,all) => ((width/all)*part).toFixed(2)

const getConcludedProgressBar = () => document.getElementById("concluded-progress")

const getPartConcludedLessons = (lessonsConcludedArray = isLessonsConcludedArray) => {
    return lessonsConcludedArray.reduce((total,valor) => {
        if(valor) return ++total
        return total
    },0)
}

const getTotalLessons = (lessonsConcludedArray = isLessonsConcludedArray) => lessonsConcludedArray.length

const setConcludedProgressBarWidth = (part,all, widthProgessBar) => {
    let concludedProgressBar = getConcludedProgressBar()
    let newWidth = getWidthProgressConcluded(widthProgessBar,part,all)
    concludedProgressBar.style.width = newWidth + "px";
    concludedProgressBar.style.height = "100%";
    concludedProgressBar.style.backgroundColor = "#147E17";
}

const getPercentageConcluded = (part,all) => ((part/all)*100).toFixed(2)

const setConcludedProgressBarPercentage = (part,all) => {
    document.getElementById("percentual-progress").textContent = `${getPercentageConcluded(part,all)}%`

}

export const changeProgressBar = () => {
    let part = getPartConcludedLessons()
    let all = getTotalLessons()
    let widthProgessBar = document.getElementById("progress-bar").clientWidth

    setConcludedProgressBarWidth(part,all, widthProgessBar)
    setConcludedProgressBarPercentage(part,all)
}