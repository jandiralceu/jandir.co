import * as React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'

import { useSiteMetadata } from '../../../hooks'
import { Navbar, SocialNetwork, Subscribe } from '../../ui'

export const MainTheme = ({ children }: React.PropsWithChildren<any>) => {
  const { title, description } = useSiteMetadata()

  return (
    <div className="bg-slate-50 text-slate-900 font-ibm min-h-screen flex flex-col">
      <div className="grow">
        <Navbar />
        {children}
      </div>

      <footer className="bg-slate-100 px-6 py-14 lg:py-24 mt-28">
        <section className="container max-w-5xl flex flex-col md:grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <section>
            <h2 className="mb-6">
              <Link to="/" className="font-bold text-3xl">
                {title}
              </Link>
            </h2>
            <p className="mb-2">{description}</p>
            <SocialNetwork />
          </section>

          <section>
            <h3 className="mb-6 font-bold">Sitemap</h3>
            <ul className="flex space-x-5 md:block md:space-x-0">
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
              <li>Sitemap.xml</li>
            </ul>
          </section>

          <section className="col-span-2 lg:col-auto">
            <h3 className="mb-6 font-bold">Subscribe</h3>

            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              ducimus esse eum fugiat hic, ipsa ipsum magnam magni
              necessitatibus nesciunt non.
            </p>

            <Subscribe />
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
