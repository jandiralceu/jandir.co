import { graphql, useStaticQuery } from "gatsby";

export default function useSiteMetadata(): ISiteMetadata["site"]["siteMetadata"] {
  const { site } = useStaticQuery<ISiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return site.siteMetadata;
}
