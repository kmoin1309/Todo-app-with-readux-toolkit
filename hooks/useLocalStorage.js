export function getDataFromLocalStorage(key, defaultType) {
    const STORED_DATA = localStorage.getItem(key)
    if (STORED_DATA) {
        return JSON.parse(STORED_DATA)
    }
    return defaultType
}

export function setDataToLocalStorage(key , value) {
    localStorage.setItem(key,JSON.stringify(value))
}
