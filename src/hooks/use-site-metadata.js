import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
            cover
            twitter
            keywords
          }
        }
      }
    `
  )

  return data.site.siteMetadata ?? {}
}
