const gatsbySourceFilesystem = require('./config/plugins/source-filesystem')

module.exports = {
  siteMetadata: {
      title: `Jandir Alceu`,
      siteUrl: `https://www.yourdomain.tld`,
      author: `Jandir Alceu - iam@jandir.co`
  },
  plugins: [
      "gatsby-plugin-postcss",
      "gatsby-transformer-remark",
      ...gatsbySourceFilesystem,
      `gatsby-plugin-mdx`,
  ]
};