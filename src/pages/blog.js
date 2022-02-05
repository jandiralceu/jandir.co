import * as React from "react"
import { graphql} from "gatsby";

const BlogPage = ({ data }) => {
    return (
        <main>
            <h1 className="text-3xl font-bold">Articles</h1>

            {data.allMdx.nodes.map((article) => (
                <article key={article.id}>
                    {article.frontmatter.title}
                </article>
            ))}
        </main>
    )
}

export const query = graphql`
    query {
        allMdx {
            nodes {
                frontmatter {
                    title
                    date
                }
                id
                slug
                timeToRead
            }
        }
    }
`

export default BlogPage
