// const gatsbySourceFilesystem = require('./config/plugins/source-filesystem')
const path = require('path')
module.exports = {
  siteMetadata: {
      title: `Jandir Alceu`,
      description: `site description goes here`,
      siteUrl: `https://www.yourdomain.tld`,
      author: `Jandir Alceu - iam@jandir.co`
  },
  plugins: [
      "gatsby-plugin-postcss",
      `gatsby-plugin-mdx`,
      "gatsby-transformer-remark",
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `articles`,
              path: path.resolve('./content/articles'),
              ignore: [`**/\.*`], // ignore files starting with a dot
          }
      },
  ]
};