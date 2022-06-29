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
        <header className="w-full relative">
          <div
            role="img"
            title={title}
            aria-label={title}
            style={{ backgroundImage: `url(${coverUrl})` }}
            className="h-40 grayscale hover:grayscale-0 rounded-lg bg-no-repeat bg-center bg-cover"
          />
        </header>

        <footer className="p-2">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <time dateTime={date}>
              {DateTimeUtils.formatDate(date, 'MM/YYYY')}
            </time>
            <span>{timeToRead}min to read.</span>
          </div>

          <h3 className="text-xl mt-2">{title}</h3>
        </footer>
      </Link>
    </article>
  )
}
