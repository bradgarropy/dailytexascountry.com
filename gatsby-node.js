const path = require("path")

const createPostPage = (post, createPage) => {
    const {relativeDirectory} = post

    createPage({
        path: `/blog/${relativeDirectory}`,
        component: path.resolve("./src/templates/post.js"),
        context: {slug: relativeDirectory},
    })
}

const createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const response = await graphql(`
        {
            allFile(
                filter: {
                    sourceInstanceName: {eq: "posts"}
                    extension: {eq: "md"}
                }
            ) {
                nodes {
                    relativeDirectory
                }
            }
        }
    `)

    const posts = response.data.allFile.nodes
    console.log(posts)
    posts.map(post => createPostPage(post, createPage))
}

module.exports = {
    createPages,
}
