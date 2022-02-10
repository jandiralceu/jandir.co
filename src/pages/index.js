import * as React from "react"
import {Link, useTranslation} from 'gatsby-plugin-react-i18next';

const IndexPage = () => {
    const {t} = useTranslation();

  return (
    <main>
        <h1 className="text-3xl font-bold">Jandir Alceu</h1>
        <h2>{t('Home')}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dignissimos maxime, nemo nobis perferendis perspiciatis sapiente totam. Architecto culpa dicta doloribus expedita illo inventore possimus quos sed, ut velit vero?</p>
        <Link to="/blog">Blog</Link>
    </main>
  )
}

export default IndexPage
