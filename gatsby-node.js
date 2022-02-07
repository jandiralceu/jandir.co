const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const {getNode} = require("gatsby/dist/datastore");
const {actions} = require("gatsby/dist/redux/actions");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)

    if (result.errors) reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')

    const articles = result.data.allMdx.edges

    articles.forEach(({ node }, index) => {
        createPage({
            path: `/blog/articles/${node.slug}`,
            component: path.resolve(`./src/components/templates/article.js`),
            context: { id: node.id }
        })
    })
}
