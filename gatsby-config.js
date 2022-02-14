const gatsbySourceFilesystem = require('./config/plugins/gatsby-source-filesystem')
const gatsbyTransformerRemark = require('./config/plugins/gatsby-plugin-mdx')
const gatsbySitematadata = require('./config/plugins/gatsby-sitemetadata')
const gatsbyi18n = require('./config/plugins/gatsby-i18n')

module.exports = {
  siteMetadata: gatsbySitematadata,
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    gatsbyTransformerRemark,
    ...gatsbySourceFilesystem,
    gatsbyi18n
  ]
}
