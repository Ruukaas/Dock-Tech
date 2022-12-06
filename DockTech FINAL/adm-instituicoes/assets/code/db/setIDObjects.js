export const setIDObjects = (object, id) => {
    Object.defineProperty(object, "id", {
        enumerable: true,
        writable: false,
        value: id
    })

    return object
}