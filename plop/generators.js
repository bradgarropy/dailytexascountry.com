const generators = plop => {
    plop.load("./helpers.js")
    plop.load("./actions.js")

    plop.setDefaultInclude({
        actionTypes: false,
        generators: true,
        helpers: false,
        partials: false,
    })

    plop.setGenerator("post", {
        prompts: [
            {
                type: "input",
                name: "title",
                message: "post title",
            },
            {
                type: "input",
                name: "tags",
                message: "post tags",
            },
        ],
        actions: [
            {
                type: "add",
                path: "content/posts/{{slug title}}/index.md",
                templateFile: "templates/frontmatter.hbs",
            },
            {
                type: "copy",
                src: "static/default.jpg",
                dest: "content/posts/{{slug title}}/images/default.jpg",
            },
        ],
    })
}

module.exports = generators
