const generators = plop => {
    plop.setDefaultInclude({generators: true})

    plop.load("@bradgarropy/plop-pack-helpers")
    plop.load("@bradgarropy/plop-pack-actions")

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
