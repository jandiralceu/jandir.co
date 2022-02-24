import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'

import Seo from '../Seo'
import { MainTheme } from '../../layouts'
import { useSiteMetadata } from '../../../hooks'

const shortcodes = { Link }

const Article = ({ data: { mdx } }) => {
  const { siteUrl: defaultUrl } = useSiteMetadata()

  return (
    <MainTheme>
      <Seo
        cover={`${defaultUrl}${mdx.frontmatter.cover.publicURL}`}
        title={mdx.frontmatter.title}
        article
      />
      <main className="container max-w-5xl my-20">
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
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
