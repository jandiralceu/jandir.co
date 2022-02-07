import * as React from "react"
import { Link } from "gatsby"
import { graphql} from "gatsby";

const BlogPage = ({ data }) => {
    return (
        <main>
            <h1 className="text-3xl font-bold">Articles</h1>

            {data.allMdx.nodes.map((article) => (
                <Link to={`/blog/articles/${article.slug}`} key={article.id}>
                    <article>
                        <h3>{article.frontmatter.title}</h3>
                        <time dateTime={article.frontmatter.date}>Posted: {article.frontmatter.date}</time>
                    </article>
                </Link>

            ))}
        </main>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                }
                id
                slug
                timeToRead
            }
        }
    }
`

export default BlogPage
