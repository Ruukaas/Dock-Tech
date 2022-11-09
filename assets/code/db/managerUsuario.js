import { getFirestore, getDocs, collection, addDoc, doc, getDoc, updateDoc,deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { setIDObjects } from "./setIDObjects.js"

const db = getFirestore();

class usuario {
    constructor(email, funcao, github, instEmpr, nome) {
        this.email = email
        this.funcao = funcao
        this.github = github
        this.instEmpr = instEmpr
        this.nome = nome
    }

}

let teste = new usuario("fernand@", "admin", "fernandogit", "ifpe", "fernandu")

const addUsuario = (usuario) => {
    try {
        const docRef = addDoc(collection(db, "usuarios"), Object.assign({}, usuario)).then(() => {
            console.log("Document written with ID: ", docRef.id);
        });

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const getAllUsuarios = () => {
    try {
        let usuariosArray = []
        let currentObject
        getDocs(collection(db, "usuarios")).then((doc) => {
            doc.forEach(valor => {
                currentObject = valor.data()
                currentObject = setIDObjects(currentObject, valor.id)
                usuariosArray.push(currentObject)
            })
        })
        return usuariosArray
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

//Paleativo ?
//Retorna uma promisse daqui em diante
const getUsuario = id => {
    try {
        return getDoc(doc(db, "usuarios", id)).then(doc => setIDObjects(doc.data(), id))
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

const updateUsuario = usr => {
    try {
        return updateDoc(doc(db,"usuarios",usr.id),Object.assign({},usr)).then(() => "Sucesso" )
    }catch (e) {
        console.log(`Error: ${e}`)
    }
}

const deleteUsuario = id => {
    try {
        return deleteDoc(doc(db,"usuarios",id)).then(() => "Sucesso")
    }catch (e) {
        console.log(`Error: ${e}`)
    }
}

console.log(await deleteUsuario("mh4ocoe1UNCb2JUAhzxD"))


