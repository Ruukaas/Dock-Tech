import { getFirestore, getDocs, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, query, where } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { removeKeyObject } from "./removeKeyObject.js";
import { setIDObjects } from "./setIDObjects.js"

const db = getFirestore();


export async function add(obj, collectionref) {
    try {
        await addDoc(collection(db, collectionref), Object.assign({}, obj))
        return "sucesso";
    } catch (e) {
        console.error("Error:", e);
    }
}

export async function getAll(collectionref) {
    try {
        let searchArray = [];
        let currentObject;
        let documents = await getDocs(collection(db, collectionref))
        documents.forEach(valor => {
            currentObject = valor.data();
            currentObject = setIDObjects(currentObject, valor.id);
            searchArray.push(currentObject);
            console.log(searchArray);
        });

        return searchArray;
    } catch (e) {
        console.log(`Error: ${e}`);
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

export async function update(obj, collectionref) {
    try {
        await updateDoc(doc(db, collectionref, obj.id), Object.assign({}, obj))
        return "sucesso" 
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}

export const del = (id, collectionref) => {
    try {
        return deleteDoc(doc(db, collectionref, id)).then(() => "Sucesso")
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

export async function filterByOneKey(collectionref,key,arrayValue) {
    try {
        let searchArray = []
        let currentObject
        const q = query(collection(db,collectionref), where(key, "in", arrayValue))

        const documents = await getDocs(q)
        documents.forEach((doc) => {
            currentObject = doc.data()
            currentObject = setIDObjects(currentObject, doc.id)
            currentObject = removeKeyObject(currentObject, "senha")
            console.log(currentObject)
            searchArray.push(currentObject)
        })
        console.log(searchArray)
        return searchArray
    }catch (e) {
        console.log(`Error: ${e}`)
    }
}


