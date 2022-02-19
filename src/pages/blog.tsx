import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'

import { MainTheme } from '../components/layouts'
import { useSiteMetadata } from '../hooks'
import Seo from '../components/templates/Seo'

const Blog = ({ data }: any) => {
  const { title: defaultTitle } = useSiteMetadata()

  return (
    <MainTheme>
      <Seo title={`Blog | ${defaultTitle}`} />

      <main className="container max-w-5xl">
        <h1 className="text-3xl font-bold">Articles</h1>

        {data.allMdx.nodes.map((article) => (
          <Link to={`/blog/articles/${article.slug}`} key={article.id}>
            <article>
              <h3>{article.frontmatter.title}</h3>
              <img
                src={article.frontmatter.cover.publicURL}
                alt={article.frontmatter.title}
              />
              <time dateTime={article.frontmatter.date}>
                Posted: {article.frontmatter.date}
              </time>
            </article>
          </Link>
        ))}
      </main>
    </MainTheme>
  )
}

export const query = graphql`
  query ($language: String!) {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          cover {
            publicURL
          }
        }
        id
        slug
        timeToRead
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default Blog
