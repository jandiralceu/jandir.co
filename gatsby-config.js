const gatsbySourceFilesystem = require('./config/plugins/gatsby-source-filesystem')
const gatsbyTransformerRemark = require('./config/plugins/gatsby-plugin-mdx')

module.exports = {
  siteMetadata: {
      title: `Jandir Alceu`,
      description: `site description goes here`,
      siteUrl: `https://jandir.co`,
      author: `Jandir Alceu - iam@jandir.co`
  },
  plugins: [
      "gatsby-plugin-postcss",
      `gatsby-plugin-sharp`,
      `gatsby-remark-images`,
      gatsbyTransformerRemark,
      ...gatsbySourceFilesystem,
  ]
};