const generators = plop => {
    plop.setDefaultInclude({generators: true})

    plop.load("plop-action-copy")
    plop.load("plop-helper-date")
    plop.load("plop-helper-list")
    plop.load("plop-helper-slugify")

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
                path: "content/posts/{{slugify title}}/index.md",
                templateFile: "templates/frontmatter.hbs",
            },
            {
                type: "copy",
                src: "static/default.jpg",
                dest: "content/posts/{{slugify title}}/images/default.jpg",
            },
        ],
    })
}

module.exports = generators
