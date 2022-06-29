import * as React from 'react'
import { graphql } from 'gatsby'

import { MainTheme } from '../components/layouts'
import { ArticleCard, Chips } from '../components/ui'
import { useSiteMetadata } from '../hooks'
import Seo from '../components/templates/Seo'

const Blog = ({ data }: any) => {
  const { title: defaultTitle } = useSiteMetadata()
  const [topics, setTopics] = React.useState<string[]>([])
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([])
  const articles = React.useMemo(() => {
    return data.allMdx.nodes ?? []
  }, [data.allMdx.nodes])

  const handleSelectedTopic = React.useCallback(
    (topic: string) => {
      if (selectedTopics.includes(topic)) {
        setSelectedTopics((prevValues) =>
          prevValues.filter((value) => value !== topic)
        )
      } else {
        setSelectedTopics((prevValues) => [...prevValues, topic])
      }
    },
    [selectedTopics]
  )

  React.useEffect(() => {
    const allTags = new Set()
    articles.forEach((node) => {
      node.frontmatter.tags.forEach((tag) => allTags.add(tag))
    })

    setTopics(Array.from(allTags).sort() as string[])
  }, [articles])

  return (
    <MainTheme>
      <Seo title={`Blog | ${defaultTitle}`} />

      <main className="container max-w-5xl">
        <section className="mt-16 mb-20">
          <h2>Search by topics:</h2>

          <div className="flex flex-wrap gap-x-3 mt-4">
            {topics.map((topic) => (
              <Chips
                key={topic}
                text={topic}
                onClick={() => handleSelectedTopic(topic)}
                className={
                  selectedTopics.includes(topic)
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-300 '
                }
              />
            ))}
          </div>
        </section>
        <section className="space-y-6 lg:space-y-0 flex flex-col lg:grid grid-cols-3 gap-x-10 gap-y-10">
          {articles.map((article) => (
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
          tags
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
