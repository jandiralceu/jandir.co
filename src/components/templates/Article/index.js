import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'

import Seo from '../Seo'
import { MainTheme } from '../../layouts'
import { useSiteMetadata } from '../../../hooks'

const shortcodes = { Link }

const Article = ({ data: { mdx: article } }) => {
  const { siteUrl: defaultUrl } = useSiteMetadata()

  return (
    <MainTheme>
      <Seo
        cover={`${defaultUrl}${article.frontmatter.cover.publicURL}`}
        title={article.frontmatter.title}
        article
      />
      <div
        className="container max-w-5xl my-20 bg-fixed bg-contain"
        style={{
          backgroundImage: `url(${article.frontmatter.cover.publicURL})`
        }}
      >
        <div className="h-80" />
      </div>
      <main className="container max-w-5xl my-20 px-6">
        <h1 className="text-3xl mb-10">{article.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={article.frontmatter}>
            {article.body}
          </MDXRenderer>
        </MDXProvider>
      </main>
    </MainTheme>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        cover {
          publicURL
        }
      }
    }
  }
`

Article.propTypes = {
  data: PropTypes.any
}

export default Article
