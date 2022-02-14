const gatsbySourceFilesystem = require('./config/plugins/gatsby-source-filesystem')
const gatsbyTransformerRemark = require('./config/plugins/gatsby-plugin-mdx')
const gatsbySitemetadata = require('./config/plugins/gatsby-sitemetadata')

module.exports = {
  siteMetadata: gatsbySitemetadata,
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    gatsbyTransformerRemark,
    ...gatsbySourceFilesystem
  ]
}
