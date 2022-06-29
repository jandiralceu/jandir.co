require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const gatsbyi18n = require('./config/plugins/gatsby-i18n')
const gatsbySitematadata = require('./config/plugins/gatsby-sitemetadata')
const gatsbyTransformerRemark = require('./config/plugins/gatsby-plugin-mdx')
const gatsbySourceFilesystem = require('./config/plugins/gatsby-source-filesystem')

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
