import * as React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import { DateTimeUtils } from '../../../utils'

type ArticleCardProps = {
  slug: string
  title: string
  coverUrl: string
  date: string
  timeToRead: number
  description: string
}

export const ArticleCard = ({
  slug,
  coverUrl,
  title,
  date,
  description,
  timeToRead
}: ArticleCardProps) => {
  return (
    <article>
      <Link to={`/blog/articles/${slug}`}>
        <div className="w-full">
          <img
            src={coverUrl}
            alt={title}
            className="grayscale hover:grayscale-0 rounded-lg"
          />
        </div>

        <div className="p-2">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>{DateTimeUtils.formatDate(date, 'MM/YYYY')}</span>
            <span>{timeToRead}min to read.</span>
          </div>
          <h3 className="text-xl mt-2">{title}</h3>

          <p className="sm:hidden">{description}</p>
        </div>
      </Link>
    </article>
  )
}
