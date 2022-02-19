import * as React from 'react'

import { Navbar, SocialNetwork } from '../../ui'
import { useSiteMetadata } from '../../../hooks'
import { Link } from 'gatsby-plugin-react-i18next'

export const MainTheme = ({ children }: React.PropsWithChildren<any>) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className="bg-zinc-100 min-h-screen flex flex-col">
      <div className="grow">
        <Navbar />
        {children}
      </div>

      <footer className="bg-zinc-900 text-white py-24 mt-48">
        <section className="container max-w-5xl flex space-x-24">
          <section className="w-96">
            <h2 className="mb-6">
              <Link to="/" className="font-ibm font-bold text-3xl">
                {title}
              </Link>
            </h2>
            <p className="mb-2">{description}</p>
            <SocialNetwork />
          </section>

          <section>
            <h3 className="mb-6 font-bold">Sitemap</h3>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
              <li>Sitemap.xml</li>
            </ul>
          </section>

          <section className="w-full">
            <h3 className="mb-6 font-bold">Contact</h3>

            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              ducimus esse eum fugiat hic, ipsa ipsum magnam magni
              necessitatibus nesciunt non nostrum obcaecati optio porro,
              quisquam repellat vitae voluptatibus. Magnam?
            </p>

            <form action="">
              <div className="flex flex-col mb-6">
                <label htmlFor="email" className="mb-2">
                  E-mail
                </label>
                <input id="email" type="email" className="form-input" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2">
                  Message
                </label>
                <textarea id="message"></textarea>
              </div>

              <button className="mt-14">Send </button>
            </form>
          </section>
        </section>

        <section className="container max-w-5xl mt-20">
          <p>
            All rights reserved © {title} {new Date().getFullYear()}
          </p>
        </section>
      </footer>
    </div>
  )
}
