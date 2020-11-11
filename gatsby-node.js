const path = require("path")

const createPostPage = (post, createPage) => {
    const {slug} = post.frontmatter

    createPage({
        path: `/posts/${slug}`,
        component: path.resolve("./src/templates/post.js"),
        context: {slug},
    })
}

const createTagPage = (tag, createPage) => {
    createPage({
        path: `/tags/${tag}`,
        component: path.resolve("./src/templates/tag.js"),
        context: {tag},
    })
}

const createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const {data} = await graphql(`
        {
            allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/posts/"}}
            ) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark.nodes
    posts.map(post => createPostPage(post, createPage))

    const tags = data.allMarkdownRemark.group.map(member => member.fieldValue)
    tags.map(tag => createTagPage(tag, createPage))
}

const onCreateWebpackConfig = ({stage, actions}) => {
    if (stage.startsWith("develop")) {
        actions.setWebpackConfig({
            resolve: {
                alias: {"react-dom": "@hot-loader/react-dom"},
            },
        })
    }

    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    })
}

module.exports = {
    createPages,
    onCreateWebpackConfig,
}
