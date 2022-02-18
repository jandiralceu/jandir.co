import * as React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/ui'
import Seo from '../components/templates/Seo'

const Index = () => {
  return (
    <div>
      <Seo />
      <Header />
    </div>
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
