module.exports = {
  resolve: `gatsby-plugin-react-i18next`,
  options: {
    localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
    languages: [`en`, `pt`],
    defaultLanguage: `en`,
    // if you are using Helmet, you must include siteUrl, and make sure you add http:https
    siteUrl: `https://example.com/`,
    // you can pass any i18next options
    i18nextOptions: {
      interpolation: {
        escapeValue: false // not needed for react as it escapes by default
      },
      keySeparator: false,
      nsSeparator: false
    },
    pages: [
      {
        matchPath: '/:lang?/blog',
        getLanguageFromPath: true
      },
      {
        matchPath: '/:lang?/about',
        getLanguageFromPath: true
      }
    ]
  }
}
