const post = require("./post")
const test = require("./test")
const component = require("./component")

const generators = plop => {
    plop.setDefaultInclude({generators: true})

    plop.load("plop-action-copy")
    plop.load("plop-helper-date")
    plop.load("plop-helper-list")
    plop.load("plop-helper-slugify")

    plop.setGenerator("post", post)
    plop.setGenerator("component", component)
    plop.setGenerator("test", test)
}

module.exports = generators
