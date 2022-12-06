import {createButton, createDivWithClasses, createDivWithID, createTitle, createParagraph, createImage} from "../../assets/code/DOM.js"

let containerEl

let administradorActions = {
    squads: {
        name: "Squads",
        hasContent: false,
        hasRedirect:true,
        redirect: "../../tela-adm-squads-inicial/tela-adm-squads.html"
        // hasButton: true,
        // button: {
        //     classe: "edit-squads",
        //     valor: "Ciar ou editar membros do squad"
        // }
    },
    usuarios: {
        name:"Usuarios",
        hasContent:false
    },
    instituiçõesEmpresas: {
        name: "Instituições/Empresas",
        hasContent: false
    },
    trilhas: {
        name: "Trilhas",
        hasContent:false
    }
    // notificacoes: {
    //     name: "Notificações",
    //     hasContent: false
    // }
}

let alunoActions = {

}

let mentorActions = {

}

export const setContainerEl = id => {
    containerEl = document.getElementById(id)
}

const createProfile = (imageProfile,name, occupation) => {
    let divProfileEl = createDivWithClasses("profile-content")

    let divProfileImgEl = createDivWithClasses("profile-image")
    let profileImgEl = createImage(imageProfile, "avatar")
    profileImgEl.setAttribute("id","profile-image")

    let divProfileNameEl = createDivWithClasses("profile-name")
    let pProfileNameEl = createParagraph(name)

    let divProfileOccupationEl = createDivWithClasses("profile-status")
    let pProfileOccupationEl = createParagraph(occupation)

    let divProfileOptionsEl = createDivWithClasses("profile-options")
    let divOptionsConfigEl = createDivWithClasses("options-config")
    let divOptionsExitEl = createDivWithClasses("options-exit")

    divOptionsConfigEl.appendChild(createParagraph("Configurações"))
    divOptionsExitEl.appendChild(createParagraph("Sair"))
    divProfileOptionsEl.appendChild(divOptionsConfigEl)
    divProfileOptionsEl.appendChild(divOptionsExitEl)

    divProfileOccupationEl.appendChild(pProfileOccupationEl)

    divProfileNameEl.appendChild(pProfileNameEl)

    divProfileImgEl.appendChild(profileImgEl)

    divProfileEl.appendChild(divProfileImgEl)
    divProfileEl.appendChild(divProfileNameEl)
    divProfileEl.appendChild(divProfileOccupationEl)
    divProfileEl.appendChild(divProfileOptionsEl)
    return divProfileEl
}

const createActions = actions => {
    let divActionsWrapperEl = createDivWithClasses("buttons-wrapper")
    let arrayActions = Object.values(actions)

    arrayActions.forEach(value => {
        let divActionEl = createDivWithClasses(`${value.name}-wrapper`)
        let btnActionEl
        if(value.hasRedirect) {
            divActionEl.addEventListener("click", () => {
                window.location.href = value.redirect
            })
        }
        if(value.hasContent) {
            btnActionEl = createButton(value.name, "open-button", "hasContent")
            let divContentWrapperEl = createDivWithClasses("content-wrapper")
            let divContentEl = createDivWithID(`div${value.name}`)
            let btnActionContentEl


            divContentWrapperEl.appendChild(divContentEl)

            if(value.hasButton) {
                btnActionContentEl = createButton(value.button.valor,value.button.classe)
                divContentWrapperEl.appendChild(btnActionContentEl)
            }

            divActionEl.appendChild(btnActionEl)
            divActionEl.appendChild(divContentWrapperEl)
        } else {
            btnActionEl = createButton(value.name, "open-button")
            divActionEl.appendChild(btnActionEl)
        }
        divActionsWrapperEl.appendChild(divActionEl)
    })

    return divActionsWrapperEl
}
//TODO - Foto padrão caso não tenha inserido foto
export const dynamicProfile = (usuario) => {
    setContainerEl("main")
    let divMainWrapper = createDivWithClasses("main-wrapper")
    let profileEl = createProfile(usuario.imgPerfil,usuario.nome, usuario.funcao)
    let actionsEl

    //Colocar para low-case?
    switch(usuario.funcao) {
        case "Aluno":
            actionsEl = createActions(alunoActions)
            break
        case "Mentor":
            actionsEl = createActions(mentorActions)
            break
        case "Administrador":
            actionsEl = createActions(administradorActions)
            break
    }
    divMainWrapper.appendChild(profileEl)
    divMainWrapper.appendChild(actionsEl)
    containerEl.appendChild(divMainWrapper)
}

//TODO - CSS para nomes grandes
let teste = {
    nome: "Maria Eduarda",
    email: "maria.eduarda@portodigital.org.br",
    funcao: "Administrador",
    instEmpr: "PT",
    imgPerfil: "./page-images/adm.png"
}


dynamicProfile(teste)
// contentSquad("divSquads")