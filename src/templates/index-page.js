/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import { RiFacebookBoxFill, RiTwitterFill, RiLinkedinBoxFill, RiYoutubeFill, RiInstagramFill, RiRssFill, RiGithubFill, RiTelegramFill, RiPinterestFill, RiSnapchatFill, RiSkypeFill,RiDribbbleFill, RiMediumFill, RiBehanceFill} from "react-icons/ri";
import { FaWordpress, FaVk} from "react-icons/fa";

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"
import Icons from "../util/socialmedia.json"

export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 585
              height: 439
            )
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts : allMarkdownRemark(
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
                  layout: FIXED
                  width: 345
                  height: 260
                )
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
  ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
  : ""
  const sIcons = Icons.socialIcons.map((icons, index) => {
    return(
      <div key={"social icons" + index}>
        { icons.icon === "facebook" ? (<Link to={icons.url} target="_blank"><RiFacebookBoxFill/></Link>) :"" }
        { icons.icon === "twitter" ? (<Link to={icons.url} target="_blank"><RiTwitterFill/></Link>) : "" }
        { icons.icon === "linkedin" ? (<Link to={icons.url} target="_blank"><RiLinkedinBoxFill/></Link>) : "" }
        { icons.icon === "youtube" ? (<Link to={icons.url} target="_blank"><RiYoutubeFill/></Link>) : ""}
        { icons.icon === "instagram" ? (<Link to={icons.url} target="_blank"><RiInstagramFill/></Link>) :"" }
        { icons.icon === "rss" ? (<Link to={icons.url} target="_blank"><RiRssFill/></Link>) : "" }
        { icons.icon === "github" ? (<Link to={icons.url} target="_blank"><RiGithubFill/></Link>) : "" }
        { icons.icon === "telegram" ? (<Link to={icons.url} target="_blank"><RiTelegramFill/></Link>) : "" }
        { icons.icon === "pinterest" ? (<Link to={icons.url} target="_blank"><RiPinterestFill/></Link>) : "" }
        { icons.icon === "snapchat" ? (<Link to={icons.url} target="_blank"><RiSnapchatFill/></Link>) : "" }
        { icons.icon === "skype" ? (<Link to={icons.url} target="_blank"><RiSkypeFill/></Link>) : "" }
        { icons.icon === "wordpress" ? (<Link to={icons.url} target="_blank"><FaWordpress/></Link>  ) : "" }
        { icons.icon === "dribbble" ? (<Link to={icons.url} target="_blank"><RiDribbbleFill/></Link>) : "" }
        { icons.icon === "medium" ? (<Link to={icons.url} target="_blank"><RiMediumFill/></Link>) : "" }
        { icons.icon === "behance" ? (<Link to={icons.url} target="_blank"><RiBehanceFill/></Link>) : "" }
        { icons.icon === "vk" ? (<Link to={icons.url} target="_blank"><FaVk/></Link>   ) : "" }
      </div>
    )
  })
	return (
		<Layout>
      <SEO/>
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">{frontmatter.title}</h1>
          <p 
            className="tagline"
            sx={{
              color: 'muted'
            }}
          >
            {frontmatter.tagline}
          </p>
          <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
          <Link 
            to={frontmatter.cta.ctaLink} 
            className="button"
            sx={{
              variant: 'links.button'
            }}
          >
            {frontmatter.cta.ctaText}<span className="icon -right"><RiArrowRightSLine/></span>
          </Link>
          <div  className="social-icons" sx={indexStyles.socialIcons}>
            {sIcons}
          </div>
        </div>
        <div>
          {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
            />
          ) : ""}
        </div>
      </div>
      <BlogListHome data={posts} />
		</Layout>
	)
}

export default HomePage

const indexStyles = {
  socialIcons: {
    "a":{
      color: "socialIcons",
      ":hover":{
        color:"socialIconsHover",
      }
    }
  }
}
