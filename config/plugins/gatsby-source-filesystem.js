const path = require('path')

module.exports = [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `articles`,
            path: `${path.resolve('./content/articles')}`,
            ignore: [`**/\.*`], // ignore files starting with a dot
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `locale`,
            path: `${path.resolve('./config/locales')}`,
            ignore: [`**/\.*`], // ignore files starting with a dot
        }
    }
]