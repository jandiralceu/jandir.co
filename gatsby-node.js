const path = require('path')

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

  if (result.errors)
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')

  const articles = result.data.allMdx.edges

  articles.forEach(({ node }) => {
    createPage({
      path: `/blog/articles/${node.slug}`,
      component: path.resolve(`./src/components/templates/Article/index.js`),
      context: { id: node.id }
    })
  })
}
