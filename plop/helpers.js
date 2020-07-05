const slugify = require("slugify")
const {format} = require("date-fns")

const helpers = plop => {
    plop.setDefaultInclude({
        actionTypes: false,
        generators: false,
        helpers: true,
        partials: false,
    })

    plop.setHelper("slug", text => {
        const options = {
            lower: true,
            remove: /[']/g,
        }

        const slug = slugify(text, options)
        return slug
    })

    plop.setHelper("date", () => {
        return format(Date.now(), "yyyy-MM-dd")
    })

    plop.setHelper("list", text => {
        return text
            .split(",")
            .map(e => e.trim())
            .join(", ")
    })
}

module.exports = helpers
