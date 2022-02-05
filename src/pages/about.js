import * as React from "react"
import { Link } from "gatsby";

const AboutPage = () => {
    return (
        <main>
            <h1 className="text-3xl font-bold">Jandir Alceu</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dignissimos maxime, nemo nobis perferendis perspiciatis sapiente totam. Architecto culpa dicta doloribus expedita illo inventore possimus quos sed, ut velit vero?</p>
            <Link to="/blog">Blog</Link>
        </main>
    )
}

export default AboutPage
