import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`

const HomePage = ({
  data: {
		markdownRemark
  },
}) => {
	const HomeData = markdownRemark
	return (
		<Layout>
      <SEO/>
      <div className="wrapper">
        <h1>{HomeData.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: HomeData.html}}/>
			  <BlogListHome/>
      </div>
		</Layout>
	)
}

export default HomePage
