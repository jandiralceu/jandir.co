import * as React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'

import { SocialNetwork } from '..'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {
  const { languages, originalPath } = useI18next()
  const [nightMode, setNightMode] = React.useState(false)

  return (
    <header className="bg-zinc-900 w-full text-white font-ibm">
      <section className="container max-w-5xl">
        <nav className="grid grid-gap grid-cols-2 py-8">
          <Link to="/" className="font-ibm font-bold text-3xl">
            JANDIR
          </Link>

          <div className="flex justify-end items-center space-x-6">
            <ul className="flex space-x-4">
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Get in touch</Link>
              </li>
            </ul>

            <ul className="flex space-x-2 text-sm">
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
          </div>
        </nav>
        <div className="grid grid-gap grid-cols-2 gap-x-20">
          <div className="justify-self-end self-center py-32">
            <h1 className="text-4xl font-normal">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Hi! I'm Jandir A. Kutabyala. <br />
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm a Front-end Engineer
            </h1>
            <SocialNetwork />
          </div>
        </div>
      </section>
    </header>
  )
}
