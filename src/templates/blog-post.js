import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const functionTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      {console.log(data)}
      <Link to="/blog">Go back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        {post.frontmatter.author} posted on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query queryBlogpost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
export default functionTemplate
