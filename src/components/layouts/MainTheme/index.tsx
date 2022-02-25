import * as React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'

import { useSiteMetadata } from '../../../hooks'
import { Navbar, SocialNetwork } from '../../ui'

export const MainTheme = ({ children }: React.PropsWithChildren<any>) => {
  const { title, description, siteUrl } = useSiteMetadata()

  return (
    <div className="bg-slate-50 text-slate-900 font-ibm min-h-screen flex flex-col">
      <div className="grow">
        <Navbar />
        {children}
      </div>

      <footer className="bg-slate-100 px-6 py-10 lg:py-14 mt-28">
        <section className="container max-w-5xl flex flex-col justify-center items-center text-center">
          <section className="flex flex-col justify-center items-center">
            <h2 className="mb-2">
              <Link to="/" className="font-bold text-3xl">
                {title}
              </Link>
            </h2>
            <p className="w-80">{description}</p>
            <SocialNetwork />
          </section>

          <section className="flex flex-col justify-center items-center mt-8">
            <ul className="flex space-x-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a
                  href={`${siteUrl}/sitemap/sitemap-0.xml`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Sitemap.xml
                </a>
              </li>
            </ul>
          </section>
        </section>

        <section className="container max-w-5xl mt-20 text-xs flex justify-between">
          <p>
            All rights reserved © {title} {new Date().getFullYear()}
          </p>

          <Link to="/">Term of use</Link>
        </section>
      </footer>
    </div>
  )
}
