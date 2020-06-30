const slugify = require("slugify")
const {format} = require("date-fns")

const config = plop => {
    plop.setHelper("slug", text => {
        const options = {
            lower: true,
            remove: /[']/g,
        }

        const slug = slugify(text, options)
        return slug
    })

    plop.setHelper("date", () => format(Date.now(), "yyyy-MM-dd"))

    plop.setGenerator("post", {
        prompts: [
            {
                type: "input",
                name: "title",
                message: "post title",
            },
        ],
        actions: [
            {
                type: "add",
                path: "content/posts/{{slug title}}/index.md",
                templateFile: "templates/frontmatter.hbs",
            },
        ],
    })
}

module.exports = config
