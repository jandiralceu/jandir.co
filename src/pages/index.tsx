import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'

import { Header } from '../components/ui'
import { MainTheme } from '../components/layouts'
import Seo from '../components/templates/Seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Index = () => {
  return (
    <MainTheme>
      <Seo />
      <Header />
      <main className="mt-24 px-6">
        <section className="container max-w-5xl">
          <div className="flex justify-between items-center font-semibold">
            <h2 className="text-2xl mb-6">Latest articles</h2>
            <Link to="/blog" className="flex items-center text-xs">
              See all articles
              <FontAwesomeIcon
                icon={['fas', 'arrow-right']}
                size="lg"
                className="ml-2"
              />
            </Link>
          </div>

          <div className="space-y-6 lg:space-y-0 flex flex-col lg:grid grid-cols-3 gap-x-16">
            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad,
              asperiores blanditiis consequatur cupiditate doloremque enim in
              ipsam laboriosam molestiae odit omnis quasi quisquam reprehenderit
              soluta tempore veritatis vero, voluptates!
            </article>

            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad,
              asperiores blanditiis consequatur cupiditate doloremque enim in
              ipsam laboriosam molestiae odit omnis quasi quisquam reprehenderit
              soluta tempore veritatis vero, voluptates!
            </article>

            <article>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad,
              asperiores blanditiis consequatur cupiditate doloremque enim in
              ipsam laboriosam molestiae odit omnis quasi quisquam reprehenderit
              soluta tempore veritatis vero, voluptates!
            </article>
          </div>
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
  }
`

export default Index
