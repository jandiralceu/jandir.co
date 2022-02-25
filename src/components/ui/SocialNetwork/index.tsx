import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialNetwork = () => {
  return (
    <section className="home mt-6">
      <div className="space-x-6 text-slate-500">
        <a
          href="https://twitter.com/jandiralceu"
          target="_blank"
          rel="noreferrer"
          title="Twitter"
        >
          <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCtBEtQ2wOra3eGJt-lIMr_A"
          target="_blank"
          rel="noreferrer"
          title="Youtube"
        >
          <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/jandiralceu/"
          target="_blank"
          rel="noreferrer"
          title="Linkedin"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" />
        </a>
        <a
          href="https://github.com/jandiralceu"
          target="_blank"
          rel="noreferrer"
          title="Github"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
        </a>
      </div>
    </section>
  )
}
