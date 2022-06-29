import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'

import { Header, ArticleCard } from '../components/ui'
import { MainTheme } from '../components/layouts'
import Seo from '../components/templates/Seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Index = ({ data }: any) => {
  return (
    <MainTheme>
      <Seo />
      <Header />
      <main className="mt-24 px-6">
        <section className="container max-w-5xl">
          <div className="flex justify-between items-center font-semibold mb-6">
            <h2 className="text-xl">Latest articles</h2>
            <Link to="/blog" className="flex items-center text-xs">
              See all articles
              <FontAwesomeIcon
                icon={['fas', 'arrow-right']}
                size="lg"
                className="ml-2"
              />
            </Link>
          </div>

          <section className="space-y-6 lg:space-y-0 flex flex-col lg:grid grid-cols-3 gap-x-12">
            {data.lastArticles.nodes.map((article: any) => (
              <ArticleCard
                key={article.id}
                slug={article.slug}
                title={article.frontmatter.title}
                coverUrl={article.frontmatter.cover.publicURL}
                date={article.frontmatter.date}
                timeToRead={article.timeToRead}
                description={article.excerpt}
              />
            ))}
          </section>
        </section>
      </main>
    </MainTheme>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    lastArticles: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      nodes {
        id
        slug
        frontmatter {
          date
          tags
          title
          cover {
            publicURL
          }
        }
        timeToRead
        excerpt(pruneLength: 60)
      }
    }
  }
`

export default Index
