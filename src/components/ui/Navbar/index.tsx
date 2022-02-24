import * as React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSiteMetadata } from '../../../hooks'

export const Navbar = () => {
  const { title } = useSiteMetadata()
  const { languages, originalPath } = useI18next()
  const [nightMode, setNightMode] = React.useState(false)

  return (
    <nav className="px-10 bg-zinc-900 w-full text-white font-ibm">
      <div className="container max-w-5xl grid grid-gap grid-cols-2 md:grid-cols-3 items-center py-10">
        <Link to="/" className="font-ibm font-bold text-3xl">
          {title}
        </Link>

        <ul className="hidden md:flex justify-center space-x-10">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="hidden md:flex justify-end space-x-4 text-sm">
          {languages.map((language) => (
            <li key={language}>
              <Link to={originalPath} language={language}>
                {language}
              </Link>
            </li>
          ))}
          <li>
            <button
              className={[
                'ml-4',
                nightMode ? 'text-white' : 'text-gray-400'
              ].join(' ')}
              title={nightMode ? 'Light' : 'Dark'}
              onClick={() => setNightMode(!nightMode)}
            >
              <FontAwesomeIcon
                icon={['fas', nightMode ? 'sun' : 'moon']}
                size="lg"
              />
            </button>
          </li>
        </ul>

        <div className="flex justify-end md:hidden text-3xl">
          <FontAwesomeIcon icon={['fas', 'bars']} size="lg" />
        </div>
      </div>
    </nav>
  )
}
