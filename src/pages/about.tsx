import * as React from 'react'
import { graphql, Link } from 'gatsby'

import { MainTheme } from '../components/layouts'
import { useSiteMetadata } from '../hooks'
import Seo from '../components/templates/Seo'

const About = () => {
  const { title: defaultTitle } = useSiteMetadata()

  return (
    <MainTheme>
      <Seo title={`About | ${defaultTitle}`} />

      <main className="container max-w-5xl ">
        <h1 className="text-3xl font-bold">Jandir A. Kutabyala</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          dignissimos maxime, nemo nobis perferendis perspiciatis sapiente
          totam. Architecto culpa dicta doloribus expedita illo inventore
          possimus quos sed, ut velit vero?
        </p>
        <Link to="/blog">Blog</Link>
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

export default About
