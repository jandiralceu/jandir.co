require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

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
    `gatsby-plugin-sitemap`,
    gatsbyTransformerRemark,
    ...gatsbySourceFilesystem,
    gatsbyi18n
  ],
  proxy: [
    {
      prefix: '/serverless',
      url: 'https://omrbwzk4e2.execute-api.us-east-1.amazonaws.com'
    }
  ]
}
