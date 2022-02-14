module.exports = {
  resolve: `gatsby-plugin-mdx`,
  options: {
    gatsbyRemarkPlugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 1024,
          sizeByPixelDensity: true
        }
      }
    ]
  }
}
