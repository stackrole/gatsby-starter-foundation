/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, StaticQuery, graphql } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <h2>Latest in <strong>Blog</strong> <span class="icon -right"><RiArrowDownLine/></span></h2>
    <div className="grids col-1 sm-2 lg-3">
      {data}
    </div>
    <Link 
      className="button" 
      to="/blog"
      sx={{
        variant: 'links.button'
      }}
    >
      See more<span class="icon -right"><RiArrowRightSLine/></span>
    </Link>
  </section>
)

export default function BlogListHome() {
  return (
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "blog-post" } } }
            limit: 6
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
                      gatsbyImageData(
                        layout: FULL_WIDTH
                        breakpoints: [360, 600]
                        placeholder: BLURRED
                      )
                    }
                  }
                }
              }
            }
          }
        }`
      }

      render={ data => {
          const posts = data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge =>
              <PostCard key={edge.node.id} data={edge.node} />
          )
          return <PostMaker data={posts} />
        } 
      }
    />
  )
}