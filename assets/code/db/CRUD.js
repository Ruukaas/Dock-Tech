import { getFirestore, getDocs, collection, addDoc, doc, getDoc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { setIDObjects } from "./setIDObjects.js"

const db = getFirestore();


export const add = (obj, collectionref) => {
    try {
        const docRef = addDoc(collection(db, collectionref), Object.assign({}, obj)).then(() => {
            console.log("Document written with ID: ", docRef.id);
        });

    } catch (e) {
        console.error("Error:", e);
    }
}

export const getAll = (collectionref) => {
    try {
        let usuariosArray = []
        let currentObject
        getDocs(collection(db, collectionref)).then((doc) => {
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

//Retorna uma promisse daqui em diante
export const get = (id, collectionref) => {
    try {
        return getDoc(doc(db, collectionref, id)).then(doc => setIDObjects(doc.data(), id))
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

export const update = (obj, collectionref) => {
    try {
        return updateDoc(doc(db, collectionref, obj.id), Object.assign({}, obj)).then(() => "Sucesso")
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

export const del = (id, collectionref) => {
    try {
        return deleteDoc(doc(db, collectionref, id)).then(() => "Sucesso")
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}


