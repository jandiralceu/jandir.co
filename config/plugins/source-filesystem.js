const path = require('path')

module.exports = [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `articles`,
            path: `${path.resolve('./content/articles')}`,
            ignore: [`**/\.*`], // ignore files starting with a dot
        }
    }
]