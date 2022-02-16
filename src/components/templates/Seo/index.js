import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useLocation } from '@reach/router'

import { useSiteMetadata } from '../../../hooks'

const Seo = ({ title, description, article, cover, keywords }) => {
  const { pathname } = useLocation()
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl: defaultSiteUrl,
    cover: defaultCover,
    keywords: defaultKeywords,
    twitter
  } = useSiteMetadata()

  const seo = {
    url: defaultSiteUrl + pathname,
    title: title ?? defaultTitle,
    cover: cover ?? defaultSiteUrl + defaultCover,
    description: description ?? defaultDescription,
    keywords: keywords ? `${keywords},${defaultKeywords}` : defaultKeywords
  }

  return (
    <Helmet title={seo.title} defaultTitle="Jandir A. Kutabyala">
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.cover} />
      <meta name="keywords" content={seo.keywords} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:type" content={article ? 'article' : 'website'} />
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

      <meta name="googlebot" content="notranslate" />
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
  cover: PropTypes.string,
  keywords: PropTypes.string
}

Seo.defaultProps = {
  title: null,
  description: null,
  article: false,
  cover: null,
  keywords: null
}

export default Seo
