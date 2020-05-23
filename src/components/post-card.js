import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ data }) => (
  <div className="post-card">
    {data.frontmatter.featuredImage ? 
      (
        <Link to={data.frontmatter.slug}>
          <Img 
            fluid={data.frontmatter.featuredImage.childImageSharp.fluid} 
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.frontmatter.title + ' - Featured image'}
            className="featured-image"
          />
        </Link>
      ) : ""
    }
    <Link className="title" to={data.frontmatter.slug}>{data.frontmatter.title}</Link>
  </div>
)

export default PostCard