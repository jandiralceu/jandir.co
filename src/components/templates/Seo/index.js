import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useLocation } from '@reach/router'

import { useSiteMetadata } from '../../../hooks'

const Seo = ({ title, description, article, cover }) => {
  const { pathname } = useLocation()
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl: defaultSiteUrl,
    cover: defaultCover,
    twitter
  } = useSiteMetadata()

  const seo = {
    url: defaultSiteUrl + pathname,
    title: title ?? defaultTitle,
    cover: cover ?? defaultSiteUrl + defaultCover,
    description: description ?? defaultDescription
  }

  return (
    <Helmet title={seo.title} defaultTitle="Jandir A. Kutabyala">
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.cover} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {article && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.cover && <meta property="og:image" content={seo.cover} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.cover && <meta name="twitter:image" content={seo.cover} />}
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
  cover: PropTypes.string
}

Seo.defaultProps = {
  title: null,
  description: null,
  article: false,
  cover: null
}

export default Seo
