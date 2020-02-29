const decode = string => {
    const element = document.createElement("textarea")
    element.innerHTML = string

    const decoded = element.value
    return decoded
}

export default decode
