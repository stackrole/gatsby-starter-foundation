import React from "react"
import { Link , graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
		) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
						title
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
							}
						}
          }
        }
      }
    }
  }
`

class BlogIndex extends React.Component {
  render() {
    
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = '/blog/' 
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge =>
        <PostCard key={edge.node.id} data={edge.node} />
      )
    
    return (
      <Layout>
        <SEO
          title={"Blog — Page " + currentPage + " of " + numPages}
          description={"Stackrole base blog page " + currentPage + " of " + numPages }
        />
        <h1>Blog</h1>
        <div className="grids col-1 sm-2 lg-3">
          {posts}
        </div>
        <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                style={{
                  margin: 0,
                }}
              >
                <Link
                  to={`${blogSlug}${i === 0 ? '' : i + 1}`}
                  style={{
                    textDecoration: 'none',
                    color: i + 1 === currentPage ? '#ffffff' : '',
                    background: i + 1 === currentPage ? '#007acc' : '',
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </ul>
      </Layout>
    )
  }
}

export default BlogIndex