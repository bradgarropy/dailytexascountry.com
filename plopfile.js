const fs = require("fs")
const path = require("path")
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

    plop.setActionType("copy", (answers, config, plop) => {
        const src = plop.renderString(config.src, answers)
        const dest = plop.renderString(config.dest, answers)

        const dirname = path.dirname(dest)

        fs.mkdirSync(dirname)
        fs.copyFileSync(src, dest)
    })

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
            {
                type: "copy",
                src: "static/default.jpg",
                dest: "content/posts/{{slug title}}/images/default.jpg",
            },
        ],
    })
}

module.exports = config
