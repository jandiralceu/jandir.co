import * as React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/ui'
import { MainTheme } from '../components/layouts'
import Seo from '../components/templates/Seo'

const Index = () => {
  return (
    <MainTheme>
      <Seo />
      <Header />
      <main>Content</main>
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
