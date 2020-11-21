const post = require("./post")

const generators = plop => {
    plop.setDefaultInclude({generators: true})

    plop.load("plop-action-copy")
    plop.load("plop-helper-date")
    plop.load("plop-helper-list")
    plop.load("plop-helper-slugify")

    plop.setGenerator("post", post)
}

module.exports = generators
