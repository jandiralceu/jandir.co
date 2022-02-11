import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialNetwork = () => {
    return (
        <section className="home mt-6">
            <div className="social-network text-white">
                <a href="https://twitter.com/jandiralceu">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                </a>
                <a href="https://www.youtube.com/channel/UCtBEtQ2wOra3eGJt-lIMr_A">
                    <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/jandiralceu/" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg"   />
                </a>
                <a href="https://github.com/jandiralceu" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} size="lg"   />
                </a>
            </div>
        </section>
    )
}
