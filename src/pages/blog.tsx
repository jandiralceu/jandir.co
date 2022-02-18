import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'

import { useSiteMetadata } from '../hooks'
import Seo from '../components/templates/Seo'

const BlogPage = ({ data }: any) => {
  const { title: defaultTitle } = useSiteMetadata()
  // const { t } = useTranslation()

  return (
    <main>
      <Seo title={`Blog | ${defaultTitle}`} />
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
  )
}

export const query = graphql`
  query {
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
  }
`

export default BlogPage
