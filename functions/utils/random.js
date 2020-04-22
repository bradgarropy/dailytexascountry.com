const random = ({min = 0, max = 1}) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const number = Math.floor(Math.random() * (max - min + 1)) + min

    return number
}

module.exports = random
